"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
;// CONCATENATED MODULE: ./pages/blog/[slug].js





async function getStaticPaths() {
    // get slugs
    const files = external_fs_default().readdirSync("posts");
    const paths = files.map((filename)=>({
            params: {
                slug: filename.replace(".md", "")
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { slug  }  }) {
    // get content for each blog
    console.log(slug);
    const mdfile = external_fs_default().readFileSync(`./posts/${slug}.md`);
    const { data: frontMatter , content  } = external_gray_matter_default()(mdfile);
    return {
        props: {
            frontMatter,
            content
        }
    };
}
function BlogPage({ frontMatter , content  }) {
    console.log(frontMatter);
    console.log(content);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl py-4",
                children: frontMatter.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: "prose lg:prose-xl",
                dangerouslySetInnerHTML: {
                    __html: external_markdown_it_default()().render(content)
                }
            })
        ]
    });
}
/* harmony default export */ const _slug_ = (BlogPage);


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7731));
module.exports = __webpack_exports__;

})();