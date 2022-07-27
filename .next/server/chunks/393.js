"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 5479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ti": () => (/* reexport */ EXPERTISE),
  "k8": () => (/* reexport */ HEADER_LINKS),
  "T5": () => (/* reexport */ HEADING),
  "dr": () => (/* reexport */ REFERENCES)
});

// UNUSED EXPORTS: sluglify

;// CONCATENATED MODULE: ./app-utils/data.ts
const HEADER_LINKS = [
    {
        "label": "Qui sommes nous ?",
        "to": "#a-propos-de-nous"
    },
    {
        "label": "Notre expertise",
        "to": "#notre-expertise"
    },
    {
        "label": "Nos r\xe9f\xe9rences",
        "to": "#ils-nous-font-confiance"
    },
    {
        "label": "Rejoignez nous",
        "to": "nos-postes"
    },
    {
        "label": "Contactez nous",
        "to": "nous-contacter"
    }
];
const REFERENCES = [
    {
        "label": "MAIF",
        "src": 'references/maif.png'
    },
    {
        "label": "bouygues",
        "src": 'references/bouygues.png'
    },
    {
        "label": "esic",
        "src": 'references/esic.png'
    },
    {
        "label": "o2",
        "src": 'references/o2.png'
    },
    {
        "label": "vinci",
        "src": 'references/vinci.png'
    }
];
const HEADING = [
    {
        "title": "Nous",
        "subtitle": "Impl\xe9mentons",
        "secondsubtitle": "Vos besoins",
        "src": 'conception.avif'
    },
    {
        "title": "Nous",
        "subtitle": "Formons",
        "secondsubtitle": "Tout type de profil",
        "src": 'training.avif'
    },
    {
        "title": "Rejoignez nous",
        "subtitle": "Nous avons le poste",
        "secondsubtitle": "Que vous voulez",
        "src": 'welcome.jpeg'
    }
];
const EXPERTISE = {
    links: [
        {
            label: "Frontend"
        },
        {
            label: "Backend"
        },
        {
            label: "Ops"
        }
    ],
    categories: [
        [
            {
                label: 'html',
                alt: 'html',
                src: 'html.png'
            },
            {
                label: 'CSS',
                alt: 'CSS',
                src: 'css.png'
            },
            {
                label: 'Javascript',
                alt: 'Javascript',
                src: 'js.png'
            },
            {
                label: 'typescript',
                alt: 'typescript',
                src: 'typescript.png'
            },
            {
                label: 'JQUERY',
                alt: 'JQUERY',
                src: 'jquery.png'
            },
            {
                label: 'ANGULAR',
                alt: 'ANGULAR',
                src: 'angular.svg'
            },
            {
                label: 'REACT',
                alt: 'REACT',
                src: 'react.png'
            }
        ],
        [
            {
                label: 'Java',
                alt: 'Java',
                src: 'java.png'
            },
            {
                label: 'SPRING BOOT',
                alt: 'SPRING BOOT',
                src: 'spring-boot.png'
            },
            {
                label: 'Node JS',
                alt: 'Node JS',
                src: 'node-js.png'
            },
            {
                label: 'PYTHON',
                alt: 'PYTHON',
                src: 'python-logo.svg'
            },
            {
                label: 'php',
                alt: 'php',
                src: 'php.png'
            }
        ],
        [
            {
                label: 'Git',
                alt: 'Git',
                src: 'git.png'
            },
            {
                label: 'Gitlab ci',
                alt: 'Gitlab ci',
                src: 'gitlab.png'
            },
            {
                label: 'Jenkins',
                alt: 'Jenkins',
                src: 'jenkins.png'
            },
            {
                label: '',
                alt: 'DOCKER',
                src: 'docker.png'
            },
            {
                label: 'Ansible',
                alt: 'Ansible',
                src: 'ansible.png'
            }
        ]
    ]
};

;// CONCATENATED MODULE: ./app-utils/index.ts




/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



function Footer(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-blue-900 py-3 font-extralight flex flex-col",
        id: "a-propos-de-nous",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto text-slate-300 py-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-10 p-3 md:grid-cols-3 md:p-0 items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "presentation",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-5",
                                    children: "CHILLO est une soci\xe9t\xe9 de conseil en nouvelles technologies.Nous concevons et developpons des applications"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Nous avons deux principales valeurs. Le bonheur de nos salari\xe9s est primordial; l’exp\xe9rience client est notre centre d'intr\xeat."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "presentation",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-5",
                                    children: "CHILLO acc\xe9l\xe8re la performance business et digitale des entreprises. "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "De la strat\xe9gie op\xe9rationnelle \xe0 la mise en œuvre de solutions de pointe, driv\xe9es par les technologies web ou mobiles."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "presentation flex items-center justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-10 flex items-center justify-between text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedinIn, {
                                        color: "text-slate-300",
                                        className: "px-3 text-6xl"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {
                                        className: "px-3 text-6xl"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFacebook, {
                                        className: "px-3 text-6xl"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyright border-top-1 text-slate-100 mt-2 font-light",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container py-5 text-sm mx-auto text-center border-solid border-t border-gray-600",
                    children: [
                        "\xa9 Copyright ",
                        new Date().getFullYear(),
                        " chillo.tech. Tous droits r\xe9serv\xe9s."
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ opened)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./layouts/opened/Footer.tsx
var Footer = __webpack_require__(8132);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./app-utils/index.ts + 1 modules
var app_utils = __webpack_require__(5479);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./layouts/opened/Header.tsx







function Header(props) {
    const router = (0,router_.useRouter)();
    const { 0: showMenu , 1: setshowMenu  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "container mx-auto flex items-center justify-between p-2 md:p-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "md:hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                width: "120",
                                                height: "35",
                                                src: "/images/chillo-services.png",
                                                alt: "chillo services"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hidden md:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                width: "200",
                                                height: "60",
                                                src: "/images/chillo-services.png",
                                                alt: "chillo services"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sm-header-links md:hidden cursor-pointer",
                                    children: showMenu ? /*#__PURE__*/ jsx_runtime_.jsx(solid_.XIcon, {
                                        className: "h-7 w-7 font-extralight text-blue-700",
                                        onClick: ()=>setshowMenu(!showMenu)
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(solid_.MenuIcon, {
                                        className: "h-7 w-7 font-extralight text-blue-700",
                                        onClick: ()=>setshowMenu(!showMenu)
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md-header-links hidden md:flex",
                                    children: app_utils/* HEADER_LINKS.map */.k8.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: `/${link.to}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300",
                                                children: link.label
                                            })
                                        }, link.to)
                                    )
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex flex-col items-center top-0 right-0 left-0 bottom-0 bg-white ${showMenu ? ' min-h-screen block' : 'hidden h-0'}`,
                children: app_utils/* HEADER_LINKS.map */.k8.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: ()=>{
                            setshowMenu(false);
                            router.push(`/${link.to}`);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300",
                            children: link.label
                        })
                    }, link.to)
                )
            })
        ]
    }));
}
/* harmony default export */ const opened_Header = (Header);

;// CONCATENATED MODULE: ./layouts/opened/index.tsx





const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-gradient-to-r to-slate-100 via-purple-50 from-blue-100 flex flex-col justify-between min-h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Soci\xe9t\xe9 de conseil en nouvelles technologies centr\xe9e sur l'exp\xe9rience client."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "chillo services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Soci\xe9t\xe9 de conseil en nouvelles technologies centr\xe9e sur l'exp\xe9rience client."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "chillo services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "chillo services|Soci\xe9t\xe9 de conseil en nouvelles technologies centr\xe9e sur l'exp\xe9rience client.\xa0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(opened_Header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "px-2 md:px-0",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
            })
        ]
    }));
};
/* harmony default export */ const opened = (Layout);


/***/ })

};
;