"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/UserList.tsx":
/*!*************************************!*\
  !*** ./src/components/UserList.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItem */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,Link,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Badge/Badge.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,Link,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,Link,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\nconst StyledBadge = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((param)=>{\n    let { theme, isOnline } = param;\n    return {\n        \"& .MuiBadge-badge\": {\n            ...isOnline && {\n                backgroundColor: \"#44b700\",\n                color: \"#44b700\",\n                boxShadow: \"0 0 0 2px \".concat(theme.palette.background.paper),\n                \"&::after\": {\n                    position: \"absolute\",\n                    top: 0,\n                    left: 0,\n                    width: \"100%\",\n                    height: \"100%\",\n                    borderRadius: \"50%\",\n                    //   animation: \"ripple 1.2s infinite ease-in-out\",\n                    border: \"1px solid currentColor\",\n                    content: '\"\"'\n                }\n            }\n        }\n    };\n//   \"@keyframes ripple\": {\n//     \"0%\": {\n//       transform: \"scale(.8)\",\n//       opacity: 1,\n//     },\n//     \"100%\": {\n//       transform: \"scale(2.4)\",\n//       opacity: 0,\n//     },\n//   },\n});\n_c = StyledBadge;\nconst SmallAvatar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        width: 22,\n        height: 22,\n        border: \"2px solid \".concat(theme.palette.background.paper)\n    };\n});\nfunction UserList(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        href: \"/\",\n        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n        variant: \"body2\",\n        sx: {\n            textDecoration: \"none\",\n            color: \"initial\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            alignItems: \"center\",\n            sx: {\n                borderRadius: 5,\n                cursor: \"pointer\",\n                padding: 2,\n                \":hover\": {\n                    backgroundColor: \"#ddd\"\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBadge, {\n                        isOnline: false,\n                        overlap: \"circular\",\n                        anchorOrigin: {\n                            vertical: \"bottom\",\n                            horizontal: \"right\"\n                        },\n                        variant: \"dot\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            alt: \"Remy Sharp\",\n                            src: \"/static/images/avatar/1.jpg\"\n                        }, void 0, false, {\n                            fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    primary: props.userName,\n                    secondary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        direction: \"row\",\n                        spacing: 4,\n                        alignItems: \"center\",\n                        component: \"span\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    display: \"inline\"\n                                },\n                                component: \"span\",\n                                variant: \"body2\",\n                                color: \"grey.500\",\n                                children: props.lastMessage\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    display: \"inline\"\n                                },\n                                component: \"span\",\n                                variant: \"body2\",\n                                color: \"grey.500\",\n                                children: [\n                                    \".\",\n                                    props.time\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c1 = UserList;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledBadge\");\n$RefreshReg$(_c1, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VzZXJMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ2U7QUFDUTtBQUNJO0FBQ2hCO0FBQ1E7QUFDUTtBQUNaO0FBQ2I7QUFRakMsTUFBTVcsY0FBY0YsZ0VBQU1BLENBQUNILDRGQUFLQSxFQUFFO1FBQUMsRUFBRU0sS0FBSyxFQUFFQyxRQUFRLEVBQUU7V0FBTTtRQUMxRCxxQkFBcUI7WUFDbkIsR0FBSUEsWUFBWTtnQkFDZEMsaUJBQWlCO2dCQUNqQkMsT0FBTztnQkFDUEMsV0FBVyxhQUE0QyxPQUEvQkosTUFBTUssT0FBTyxDQUFDQyxVQUFVLENBQUNDLEtBQUs7Z0JBQ3RELFlBQVk7b0JBQ1ZDLFVBQVU7b0JBQ1ZDLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2QsbURBQW1EO29CQUNuREMsUUFBUTtvQkFDUkMsU0FBUztnQkFDWDtZQUNGLENBQUM7UUFDSDtJQVdGO0FBVkUsMkJBQTJCO0FBQzNCLGNBQWM7QUFDZCxnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsaUNBQWlDO0FBQ2pDLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1QsT0FBTztBQUNUO0tBN0JNaEI7QUErQk4sTUFBTWlCLGNBQWNuQixnRUFBTUEsQ0FBQ0wsNERBQU1BLEVBQUU7UUFBQyxFQUFFUSxLQUFLLEVBQUU7V0FBTTtRQUNqRFcsT0FBTztRQUNQQyxRQUFRO1FBQ1JFLFFBQVEsYUFBNEMsT0FBL0JkLE1BQU1LLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLO0lBQ3JEO0FBQUE7QUFFZSxTQUFTVSxTQUFTQyxLQUFnQjtJQUMvQyxxQkFDRSw4REFBQ3ZCLDRGQUFJQTtRQUNId0IsTUFBSztRQUNMQyxXQUFXdEIsa0RBQVFBO1FBQ25CdUIsU0FBUTtRQUNSQyxJQUFJO1lBQUVDLGdCQUFnQjtZQUFRcEIsT0FBTztRQUFVO2tCQUUvQyw0RUFBQ2QsOERBQVFBO1lBQ1BtQyxZQUFXO1lBQ1hGLElBQUk7Z0JBQ0ZULGNBQWM7Z0JBQ2RZLFFBQVE7Z0JBQ1JDLFNBQVM7Z0JBQ1QsVUFBVTtvQkFDUnhCLGlCQUFpQjtnQkFDbkI7WUFDRjs7OEJBRUEsOERBQUNYLG9FQUFjQTs4QkFDYiw0RUFBQ1E7d0JBQ0NFLFVBQVU7d0JBQ1YwQixTQUFRO3dCQUNSQyxjQUFjOzRCQUFFQyxVQUFVOzRCQUFVQyxZQUFZO3dCQUFRO3dCQUN4RFQsU0FBUTtrQ0FFUiw0RUFBQzdCLDREQUFNQTs0QkFBQ3VDLEtBQUk7NEJBQWFDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2pDLDhEQUFDMUMsa0VBQVlBO29CQUNYMkMsU0FBU2YsTUFBTWdCLFFBQVE7b0JBQ3ZCQyx5QkFDRSw4REFBQ3ZDLDZGQUFLQTt3QkFDSndDLFdBQVU7d0JBQ1ZDLFNBQVM7d0JBQ1RiLFlBQVc7d0JBQ1hKLFdBQVU7OzBDQUVWLDhEQUFDM0IsaUVBQVVBO2dDQUNUNkIsSUFBSTtvQ0FBRWdCLFNBQVM7Z0NBQVM7Z0NBQ3hCbEIsV0FBVTtnQ0FDVkMsU0FBUTtnQ0FDUmxCLE9BQU07MENBRUxlLE1BQU1xQixXQUFXOzswQ0FFcEIsOERBQUM5QyxpRUFBVUE7Z0NBQ1Q2QixJQUFJO29DQUFFZ0IsU0FBUztnQ0FBUztnQ0FDeEJsQixXQUFVO2dDQUNWQyxTQUFRO2dDQUNSbEIsT0FBTTs7b0NBQ1A7b0NBQ0dlLE1BQU1zQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUI7TUE1RHdCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckxpc3QudHN4P2U1MDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgQmFkZ2UsIExpbmssIFN0YWNrLCBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBQcm9wVHlwZXMge1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICBsYXN0TWVzc2FnZTogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG4gIHVzZXJBdmF0YXI6IHN0cmluZztcbn1cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkKEJhZGdlKSgoeyB0aGVtZSwgaXNPbmxpbmUgfSkgPT4gKHtcbiAgXCImIC5NdWlCYWRnZS1iYWRnZVwiOiB7XG4gICAgLi4uKGlzT25saW5lICYmIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDRiNzAwXCIsXG4gICAgICBjb2xvcjogXCIjNDRiNzAwXCIsXG4gICAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9YCxcbiAgICAgIFwiJjo6YWZ0ZXJcIjoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAvLyAgIGFuaW1hdGlvbjogXCJyaXBwbGUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dFwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiLFxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICAvLyAgIFwiQGtleWZyYW1lcyByaXBwbGVcIjoge1xuICAvLyAgICAgXCIwJVwiOiB7XG4gIC8vICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSguOClcIixcbiAgLy8gICAgICAgb3BhY2l0eTogMSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBcIjEwMCVcIjoge1xuICAvLyAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMi40KVwiLFxuICAvLyAgICAgICBvcGFjaXR5OiAwLFxuICAvLyAgICAgfSxcbiAgLy8gICB9LFxufSkpO1xuXG5jb25zdCBTbWFsbEF2YXRhciA9IHN0eWxlZChBdmF0YXIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHdpZHRoOiAyMixcbiAgaGVpZ2h0OiAyMixcbiAgYm9yZGVyOiBgMnB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMaXN0KHByb3BzOiBQcm9wVHlwZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgaHJlZj1cIi9cIlxuICAgICAgY29tcG9uZW50PXtOZXh0TGlua31cbiAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICBzeD17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImluaXRpYWxcIiB9fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgIFwiOmhvdmVyXCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGRkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgIDxTdHlsZWRCYWRnZVxuICAgICAgICAgICAgaXNPbmxpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgb3ZlcmxhcD1cImNpcmN1bGFyXCJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XG4gICAgICAgICAgICB2YXJpYW50PVwiZG90XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXIvMS5qcGdcIiAvPlxuICAgICAgICAgIDwvU3R5bGVkQmFkZ2U+XG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICBwcmltYXJ5PXtwcm9wcy51c2VyTmFtZX1cbiAgICAgICAgICBzZWNvbmRhcnk9e1xuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImlubGluZVwiIH19XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXkuNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYXN0TWVzc2FnZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiaW5saW5lXCIgfX1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS41MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgLntwcm9wcy50aW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUF2YXRhciIsIkF2YXRhciIsIlR5cG9ncmFwaHkiLCJCYWRnZSIsIkxpbmsiLCJTdGFjayIsInN0eWxlZCIsIk5leHRMaW5rIiwiU3R5bGVkQmFkZ2UiLCJ0aGVtZSIsImlzT25saW5lIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjb250ZW50IiwiU21hbGxBdmF0YXIiLCJVc2VyTGlzdCIsInByb3BzIiwiaHJlZiIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJzeCIsInRleHREZWNvcmF0aW9uIiwiYWxpZ25JdGVtcyIsImN1cnNvciIsInBhZGRpbmciLCJvdmVybGFwIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiYWx0Iiwic3JjIiwicHJpbWFyeSIsInVzZXJOYW1lIiwic2Vjb25kYXJ5IiwiZGlyZWN0aW9uIiwic3BhY2luZyIsImRpc3BsYXkiLCJsYXN0TWVzc2FnZSIsInRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UserList.tsx\n"));

/***/ })

});