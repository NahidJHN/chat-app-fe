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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItem */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,Link,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Badge/Badge.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,Link,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,Link,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\nconst StyledBadge = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((param)=>{\n    let { theme, isOnline } = param;\n    return {\n        \"& .MuiBadge-badge\": {\n            ...isOnline && {\n                backgroundColor: \"#44b700\",\n                color: \"#44b700\",\n                boxShadow: \"0 0 0 2px \".concat(theme.palette.background.paper),\n                \"&::after\": {\n                    position: \"absolute\",\n                    top: 0,\n                    left: 0,\n                    width: \"100%\",\n                    height: \"100%\",\n                    borderRadius: \"50%\",\n                    //   animation: \"ripple 1.2s infinite ease-in-out\",\n                    border: \"1px solid currentColor\",\n                    content: '\"\"'\n                }\n            }\n        }\n    };\n//   \"@keyframes ripple\": {\n//     \"0%\": {\n//       transform: \"scale(.8)\",\n//       opacity: 1,\n//     },\n//     \"100%\": {\n//       transform: \"scale(2.4)\",\n//       opacity: 0,\n//     },\n//   },\n});\n_c = StyledBadge;\nconst SmallAvatar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        width: 22,\n        height: 22,\n        border: \"2px solid \".concat(theme.palette.background.paper)\n    };\n});\nfunction UserList(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        href: \"/\",\n        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n        variant: \"body2\",\n        sx: {\n            textDecoration: \"none\",\n            color: \"initial\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            alignItems: \"center\",\n            sx: {\n                borderRadius: 5,\n                cursor: \"pointer\",\n                padding: 2,\n                \":hover\": {\n                    backgroundColor: \"#ddd\"\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBadge, {\n                        isOnline: false,\n                        overlap: \"circular\",\n                        anchorOrigin: {\n                            vertical: \"bottom\",\n                            horizontal: \"right\"\n                        },\n                        variant: \"dot\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            alt: \"Remy Sharp\",\n                            src: \"/static/images/avatar/1.jpg\"\n                        }, void 0, false, {\n                            fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    primary: props.userName,\n                    secondary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Badge_Link_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        direction: \"row\",\n                        spacing: 4,\n                        alignItems: \"center\",\n                        component: \"span\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    display: \"inline\"\n                                },\n                                component: \"span\",\n                                variant: \"body2\",\n                                color: \"grey.500\",\n                                children: props.lastMessage\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    display: \"inline\"\n                                },\n                                component: \"span\",\n                                variant: \"body2\",\n                                color: \"grey.500\",\n                                children: [\n                                    \".\",\n                                    props.time\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jhn/personal-work/chat-app-fe/src/components/UserList.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_c1 = UserList;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledBadge\");\n$RefreshReg$(_c1, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VzZXJMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ2U7QUFDUTtBQUNJO0FBQ2hCO0FBQ1E7QUFDUTtBQUNaO0FBQ2I7QUFhakMsTUFBTVcsY0FBY0YsZ0VBQU1BLENBQUNILDRGQUFLQSxFQUFpQjtRQUFDLEVBQUVNLEtBQUssRUFBRUMsUUFBUSxFQUFFO1dBQU07UUFDekUscUJBQXFCO1lBQ25CLEdBQUlBLFlBQVk7Z0JBQ2RDLGlCQUFpQjtnQkFDakJDLE9BQU87Z0JBQ1BDLFdBQVcsYUFBNEMsT0FBL0JKLE1BQU1LLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLO2dCQUN0RCxZQUFZO29CQUNWQyxVQUFVO29CQUNWQyxLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxjQUFjO29CQUNkLG1EQUFtRDtvQkFDbkRDLFFBQVE7b0JBQ1JDLFNBQVM7Z0JBQ1g7WUFDRixDQUFDO1FBQ0g7SUFXRjtBQVZFLDJCQUEyQjtBQUMzQixjQUFjO0FBQ2QsZ0NBQWdDO0FBQ2hDLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLGlDQUFpQztBQUNqQyxvQkFBb0I7QUFDcEIsU0FBUztBQUNULE9BQU87QUFDVDtLQTdCTWhCO0FBK0JOLE1BQU1pQixjQUFjbkIsZ0VBQU1BLENBQUNMLDREQUFNQSxFQUFFO1FBQUMsRUFBRVEsS0FBSyxFQUFFO1dBQU07UUFDakRXLE9BQU87UUFDUEMsUUFBUTtRQUNSRSxRQUFRLGFBQTRDLE9BQS9CZCxNQUFNSyxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSztJQUNyRDtBQUFBO0FBRWUsU0FBU1UsU0FBU0MsS0FBZ0I7SUFDL0MscUJBQ0UsOERBQUN2Qiw0RkFBSUE7UUFDSHdCLE1BQUs7UUFDTEMsV0FBV3RCLGtEQUFRQTtRQUNuQnVCLFNBQVE7UUFDUkMsSUFBSTtZQUFFQyxnQkFBZ0I7WUFBUXBCLE9BQU87UUFBVTtrQkFFL0MsNEVBQUNkLDhEQUFRQTtZQUNQbUMsWUFBVztZQUNYRixJQUFJO2dCQUNGVCxjQUFjO2dCQUNkWSxRQUFRO2dCQUNSQyxTQUFTO2dCQUNULFVBQVU7b0JBQ1J4QixpQkFBaUI7Z0JBQ25CO1lBQ0Y7OzhCQUVBLDhEQUFDWCxvRUFBY0E7OEJBQ2IsNEVBQUNRO3dCQUNDRSxVQUFVO3dCQUNWMEIsU0FBUTt3QkFDUkMsY0FBYzs0QkFBRUMsVUFBVTs0QkFBVUMsWUFBWTt3QkFBUTt3QkFDeERULFNBQVE7a0NBRVIsNEVBQUM3Qiw0REFBTUE7NEJBQUN1QyxLQUFJOzRCQUFhQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqQyw4REFBQzFDLGtFQUFZQTtvQkFDWDJDLFNBQVNmLE1BQU1nQixRQUFRO29CQUN2QkMseUJBQ0UsOERBQUN2Qyw2RkFBS0E7d0JBQ0p3QyxXQUFVO3dCQUNWQyxTQUFTO3dCQUNUYixZQUFXO3dCQUNYSixXQUFVOzswQ0FFViw4REFBQzNCLGlFQUFVQTtnQ0FDVDZCLElBQUk7b0NBQUVnQixTQUFTO2dDQUFTO2dDQUN4QmxCLFdBQVU7Z0NBQ1ZDLFNBQVE7Z0NBQ1JsQixPQUFNOzBDQUVMZSxNQUFNcUIsV0FBVzs7MENBRXBCLDhEQUFDOUMsaUVBQVVBO2dDQUNUNkIsSUFBSTtvQ0FBRWdCLFNBQVM7Z0NBQVM7Z0NBQ3hCbEIsV0FBVTtnQ0FDVkMsU0FBUTtnQ0FDUmxCLE9BQU07O29DQUNQO29DQUNHZSxNQUFNc0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVCO01BNUR3QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VzZXJMaXN0LnRzeD9lNTA2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhclwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEJhZGdlLCBMaW5rLCBTdGFjaywgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgdXNlck5hbWU6IHN0cmluZztcbiAgbGFzdE1lc3NhZ2U6IHN0cmluZztcbiAgdGltZTogc3RyaW5nO1xuICB1c2VyQXZhdGFyOiBzdHJpbmc7XG4gIGlzT25saW5lOiBmYWxzZTtcbn1cbmludGVyZmFjZSBCYWRnZU93blByb3BzIHtcbiAgaXNPbmxpbmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkKEJhZGdlKTxCYWRnZU93blByb3BzPigoeyB0aGVtZSwgaXNPbmxpbmUgfSkgPT4gKHtcbiAgXCImIC5NdWlCYWRnZS1iYWRnZVwiOiB7XG4gICAgLi4uKGlzT25saW5lICYmIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDRiNzAwXCIsXG4gICAgICBjb2xvcjogXCIjNDRiNzAwXCIsXG4gICAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9YCxcbiAgICAgIFwiJjo6YWZ0ZXJcIjoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAvLyAgIGFuaW1hdGlvbjogXCJyaXBwbGUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dFwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiLFxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICAvLyAgIFwiQGtleWZyYW1lcyByaXBwbGVcIjoge1xuICAvLyAgICAgXCIwJVwiOiB7XG4gIC8vICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSguOClcIixcbiAgLy8gICAgICAgb3BhY2l0eTogMSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBcIjEwMCVcIjoge1xuICAvLyAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMi40KVwiLFxuICAvLyAgICAgICBvcGFjaXR5OiAwLFxuICAvLyAgICAgfSxcbiAgLy8gICB9LFxufSkpO1xuXG5jb25zdCBTbWFsbEF2YXRhciA9IHN0eWxlZChBdmF0YXIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHdpZHRoOiAyMixcbiAgaGVpZ2h0OiAyMixcbiAgYm9yZGVyOiBgMnB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMaXN0KHByb3BzOiBQcm9wVHlwZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgaHJlZj1cIi9cIlxuICAgICAgY29tcG9uZW50PXtOZXh0TGlua31cbiAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICBzeD17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImluaXRpYWxcIiB9fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgIFwiOmhvdmVyXCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGRkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgIDxTdHlsZWRCYWRnZVxuICAgICAgICAgICAgaXNPbmxpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgb3ZlcmxhcD1cImNpcmN1bGFyXCJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XG4gICAgICAgICAgICB2YXJpYW50PVwiZG90XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXIvMS5qcGdcIiAvPlxuICAgICAgICAgIDwvU3R5bGVkQmFkZ2U+XG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICBwcmltYXJ5PXtwcm9wcy51c2VyTmFtZX1cbiAgICAgICAgICBzZWNvbmRhcnk9e1xuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImlubGluZVwiIH19XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXkuNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYXN0TWVzc2FnZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiaW5saW5lXCIgfX1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS41MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgLntwcm9wcy50aW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUF2YXRhciIsIkF2YXRhciIsIlR5cG9ncmFwaHkiLCJCYWRnZSIsIkxpbmsiLCJTdGFjayIsInN0eWxlZCIsIk5leHRMaW5rIiwiU3R5bGVkQmFkZ2UiLCJ0aGVtZSIsImlzT25saW5lIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjb250ZW50IiwiU21hbGxBdmF0YXIiLCJVc2VyTGlzdCIsInByb3BzIiwiaHJlZiIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJzeCIsInRleHREZWNvcmF0aW9uIiwiYWxpZ25JdGVtcyIsImN1cnNvciIsInBhZGRpbmciLCJvdmVybGFwIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiYWx0Iiwic3JjIiwicHJpbWFyeSIsInVzZXJOYW1lIiwic2Vjb25kYXJ5IiwiZGlyZWN0aW9uIiwic3BhY2luZyIsImRpc3BsYXkiLCJsYXN0TWVzc2FnZSIsInRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UserList.tsx\n"));

/***/ })

});