(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1520:
/***/ ((module) => {

// Exports
module.exports = {
	"ui-hero": "Home_ui-hero__ng_2Y",
	"ui-hero__container": "Home_ui-hero__container__RDL2w",
	"ui-hero__box": "Home_ui-hero__box__tcUXS",
	"ui-hero__title": "Home_ui-hero__title__1eTXJ",
	"ui-hero__title-name": "Home_ui-hero__title-name__e0o5y",
	"sr-only": "Home_sr-only__CBpTD",
	"ui-hero__subtitle": "Home_ui-hero__subtitle__oBnae",
	"ui-hero__subtitle-break": "Home_ui-hero__subtitle-break__DsOZG"
};


/***/ }),

/***/ 3440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(8823);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(4598);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1520);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./components/Whatsapp.js




const Whatsicon = (external_styled_components_default()).div`
position: fixed;
bottom: 20px;
right: 20px;
width: 39px;
height: 39px;
 overflow: hidden;
 z-index: 1000
 `;
function Whatsapp() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Whatsicon, {
        className: "fixed bottom-4 right-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            "aria-label": "Abre whatsapp, link do meu whatsapp (48) 99911-3048, me mande um oi",
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://api.whatsapp.com/send?phone=5548999113048",
            className: "whatsapp",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "../whatsapp.svg",
                width: "39",
                height: "39",
                "aria-hidden": "true",
                alt: "Whatsapp"
            })
        })
    });
}

;// CONCATENATED MODULE: ./pages/index.js








async function getStaticProps() {
    // get the post
    const files = external_fs_default().readdirSync("posts");
    const posts = files.map((filename)=>{
        const slug = filename.replace(".md", "");
        const readFiles = external_fs_default().readFileSync(`./posts/${filename}`);
        const { data: frontMatter  } = external_gray_matter_default()(readFiles);
        return {
            slug,
            frontMatter
        };
    });
    return {
        props: {
            posts
        }
    };
}
function Home({ posts  }) {
    console.log(`posts: ${posts}`);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Whatsapp, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex min-h-screen flex-col items-left justify-between p-24",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    role: "banner",
                    className: (Home_module_default()).container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "py-8",
                            src: "./brand.svg",
                            width: "80",
                            height: "80",
                            alt: "Logotipo Felipe Genuino. Descri\xe7\xe3o do logotipo: S\xedmbolo com um F estilizado no tamanho de uma moeda pequena,  em branco na frente de um fundo escuro, fica localizado visualmente em cima e a esquerda do banner, se clicar vai para a home, como s\xf3 temos uma p\xe1gina ficamos por aqui."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "text-6xl font-bold",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block",
                                    children: " Ol\xe1, sou"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-black",
                                    children: " Felipe Genuino"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-4 text-left",
                            children: "designer de interfaces & frontend apaixonado por acessibilidade."
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [339,465], () => (__webpack_exec__(3440)));
module.exports = __webpack_exports__;

})();