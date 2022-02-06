"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "@chakra-ui/layout"
const layout_namespaceObject = require("@chakra-ui/layout");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
;// CONCATENATED MODULE: ./components/ColorModeSwitcher.js




const ColorModeSwitcher = (props)=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    const text = (0,react_.useColorModeValue)('dark', 'light');
    const SwitchIcon = (0,react_.useColorModeValue)(fa_.FaMoon, fa_.FaSun);
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
        size: "md",
        fontSize: "lg",
        "aria-label": `Switch to ${text} mode`,
        variant: "ghost",
        color: "current",
        marginLeft: "2",
        onClick: toggleColorMode,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(SwitchIcon, {
        }),
        ...props
    }));
};

;// CONCATENATED MODULE: ./components/header.js



const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Grid, {
        minH: "20vh",
        p: "3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ColorModeSwitcher, {
                justifySelf: "flex-end"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.VStack, {
                spacing: "8",
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                    fontSize: "6xl",
                    fontWeight: "extrabold",
                    fontFamily: "Futura",
                    children: "Itta's Portfolio"
                })
            })
        ]
    })
;
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./components/linkButton.js


const LinkButton = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        ...props,
        target: "_blank",
        isExternal: true,
        textDecoration: "none!important",
        as: react_.Link
    })
;
/* harmony default export */ const linkButton = (LinkButton);

;// CONCATENATED MODULE: ./components/footer.js




const Footer = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        align: "center",
        p: "2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ButtonGroup, {
            spacing: "10px",
            justify: "center",
            variant: "outline",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(linkButton, {
                    href: "https://github.com/itta611",
                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                    }),
                    children: "@itta611"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(linkButton, {
                    href: "https://twitter.com/ittaFunahashi",
                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                    }),
                    children: "@ittaFunahashi"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(linkButton, {
                    href: "https://github.com/itta611/itta-portfolio",
                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCode, {
                    }),
                    children: "Source Code"
                })
            ]
        })
    })
;
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layouts/main.js




const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Itta's Portfolio"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                fontSize: "xl",
                maxW: "container.md",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const main = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: react_.theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(main, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(140));
module.exports = __webpack_exports__;

})();