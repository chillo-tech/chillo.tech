"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.ts

const handler = async (req, res)=>{
    const body = req.body;
    const transporter = external_nodemailer_default().createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });
    try {
        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: body.title,
            html: `
          <p>Bonjour,</p>
          <p>Vous avez un nouveau ${body.firstName} ${body.lastName}</p>
          <p>Son mail est ${body.email}</p>
          <p>Son téléphone est ${body.phone}</p>
          <p>Son message</p>
          <div>${body.message}</div>
        `
        });
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({
        name: 'John Doe'
    });
};
/* harmony default export */ const contact = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2732));
module.exports = __webpack_exports__;

})();