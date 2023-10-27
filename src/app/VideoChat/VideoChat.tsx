import React, { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "@/context/Socket.context";
import useAuthUser from "@/hooks/AuthUser";

const VideoCall = () => {
  const { socket, onlineUsers } = useContext(SocketContext);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isCalling, setIsCalling] = useState(false);
  const localStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

  const user = useAuthUser();

  const handleICECandidate = (event: RTCPeerConnectionIceEvent) => {
    if (event.candidate) {
      socket.emit("ice-candidate", {
        candidate: event.candidate,
        to: onlineUsers?.[0]?.socketId,
      });
    }
  };

  const handleNegotiationNeeded = async () => {
    const peerConnection = peerConnectionRef.current;

    if (!peerConnection) {
      return;
    }

    try {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      const selfUserIndex = onlineUsers?.findIndex(
        (socketUser: any) => socketUser._id === user._id
      );

      socket?.emit("offer", {
        offer,
        to: onlineUsers?.[selfUserIndex === 0 ? 1 : 0]?.socketId,
        from: onlineUsers?.[selfUserIndex]?.socketId,
      });
    } catch (error) {
      console.error("Error creating offer:", error);
    }
  };

  useEffect(() => {
    if (!socket) return;
    if (onlineUsers?.length === 0) return;
    const startVideoCall = async () => {
      try {
        localStreamRef.current = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStreamRef.current;
        }
        const peerConnection = new RTCPeerConnection();
        peerConnectionRef.current = peerConnection;

        localStreamRef.current.getTracks().forEach((track) => {
          peerConnection.addTrack(track, localStreamRef.current as MediaStream);
        });

        peerConnection.onicecandidate = handleICECandidate;
        peerConnection.onnegotiationneeded = handleNegotiationNeeded;
        peerConnection.ontrack = handleRemoteStream;
      } catch (error) {
        console.error(error);
      }
    };

    startVideoCall();

    socket.on("ice-candidate", (data: any) => {
      if (data.to === onlineUsers?.[0]?.socketId) {
        peerConnectionRef.current?.addIceCandidate(
          new RTCIceCandidate(data.candidate)
        );
      }
    });

    socket.on("offer", async (data: any) => {
      // console.log("peerConnection", peerConnection);
      if (data.to === onlineUsers?.[0]?.socketId) {
        const peerConnection = peerConnectionRef.current;

        console.log("offered", data);

        if (!peerConnection) {
          return;
        }

        await peerConnection.setRemoteDescription(data.offer);
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);

        socket.emit("answer", {
          answer,
          to: data.from,
        });
      }
    });

    socket.on("answer", (data: any) => {
      peerConnectionRef.current?.setRemoteDescription(data.answer);
      // }
    });

    return () => {
      const peerConnection = peerConnectionRef.current;
      if (peerConnection) {
        peerConnection.close();
      }

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = null;
      }

      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = null;
      }
      socket.off("ice-candidate");
      socket.off("offer");
      socket.off("answer");
    };
  }, [socket, onlineUsers?.length]);

  const handleCall = async (onlineUsers: any) => {
    const peerConnection = peerConnectionRef.current;

    if (!peerConnection) {
      return;
    }
    try {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      const selfUserIndex = onlineUsers?.findIndex(
        (socketUser: any) => socketUser._id === user._id
      );
      socket.emit("offer", {
        offer,
        to: onlineUsers?.[selfUserIndex === 0 ? 1 : 0]?.socketId,
        from: onlineUsers?.[selfUserIndex]?.socketId,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemoteStream = (event: any) => {
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = event.streams[0];
    }
  };
  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline muted />
      <video ref={remoteVideoRef} autoPlay playsInline />
      {!isCalling && (
        <button onClick={() => handleCall(onlineUsers)}>Call</button>
      )}
      {isCalling && <p>Calling...</p>}
    </div>
  );
};

export default VideoCall;
