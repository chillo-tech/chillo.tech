"use strict";
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 2742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lm": () => (/* reexport */ components_ExpertiseCategory),
  "mQ": () => (/* reexport */ components_Tabs),
  "Dx": () => (/* reexport */ components_Title)
});

// UNUSED EXPORTS: Footer

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ExpertiseCategory.tsx



function ExpertiseCategory({ category  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "expertise grid grid-flow-row grid-col-2 md:grid-cols-5",
        children: category.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card flex flex-col align-middle items-center p-3 font-weight-lighter mx-auto w-3/4 md:w-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: `/images/${item.src}`,
                            alt: item.alt,
                            width: "80",
                            height: "80"
                        })
                    }),
                    item.label ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "name uppercase font-extrabold",
                        children: item.label
                    }) : null
                ]
            }, `item-${index}`)
        )
    }));
}
/* harmony default export */ const components_ExpertiseCategory = (ExpertiseCategory);

// EXTERNAL MODULE: ./layouts/opened/Footer.tsx
var Footer = __webpack_require__(8132);
;// CONCATENATED MODULE: ./components/Tabs.tsx


function Tabs({ links , children =[]  }) {
    const { 0: activeTab , 1: setActiveTab  } = (0,external_react_.useState)(0);
    const updateActiveTab = ({ tabIndex  })=>{
        setActiveTab(tabIndex);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "tabs-wrapper p-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4",
                children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `
                    nav-item flex-auto text-center
                    cursor-pointer py-2 px-4 text-gray-500 border-b-2 uppercase
                    ${activeTab === index ? 'text-emerald-600 border-emerald-600' : 'text-stone-500 border-stone-500'}
                 `,
                        tabIndex: index,
                        onClick: ()=>updateActiveTab({
                                tabIndex: index
                            })
                        ,
                        children: link.label
                    }, `link-${index}`)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tabs-body",
                children: children[activeTab]
            })
        ]
    }));
}
/* harmony default export */ const components_Tabs = (Tabs);

;// CONCATENATED MODULE: ./components/Title.tsx


function Title({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: "title px-5 from-slate-900 font-extrabold text-4xl",
        children: children
    }));
}
/* harmony default export */ const components_Title = (Title);

;// CONCATENATED MODULE: ./components/index.ts






/***/ })

};
;