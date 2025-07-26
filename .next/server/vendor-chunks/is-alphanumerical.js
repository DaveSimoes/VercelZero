"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-alphanumerical";
exports.ids = ["vendor-chunks/is-alphanumerical"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar alphabetical = __webpack_require__(/*! is-alphabetical */ \"(ssr)/./node_modules/is-alphabetical/index.js\");\nvar decimal = __webpack_require__(/*! is-decimal */ \"(ssr)/./node_modules/is-decimal/index.js\");\nmodule.exports = alphanumerical;\n// Check if the given character code, or the character code at the first\n// character, is alphanumerical.\nfunction alphanumerical(character) {\n    return alphabetical(character) || decimal(character);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYWxwaGFudW1lcmljYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxlQUFlQyxtQkFBT0EsQ0FBQztBQUMzQixJQUFJQyxVQUFVRCxtQkFBT0EsQ0FBQztBQUV0QkUsT0FBT0MsT0FBTyxHQUFHQztBQUVqQix3RUFBd0U7QUFDeEUsZ0NBQWdDO0FBQ2hDLFNBQVNBLGVBQWVDLFNBQVM7SUFDL0IsT0FBT04sYUFBYU0sY0FBY0osUUFBUUk7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92MCBjbG9uZSB3aXRoIGNvcGlsb3RraXQsIG5leHQuanMsIGFuZCBvcGVuYWkgZ3B0NC8uL25vZGVfbW9kdWxlcy9pcy1hbHBoYW51bWVyaWNhbC9pbmRleC5qcz8wNzRhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgYWxwaGFiZXRpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFiZXRpY2FsJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYWxwaGFudW1lcmljYWxcblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGFscGhhbnVtZXJpY2FsLlxuZnVuY3Rpb24gYWxwaGFudW1lcmljYWwoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBhbHBoYWJldGljYWwoY2hhcmFjdGVyKSB8fCBkZWNpbWFsKGNoYXJhY3Rlcilcbn1cbiJdLCJuYW1lcyI6WyJhbHBoYWJldGljYWwiLCJyZXF1aXJlIiwiZGVjaW1hbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhbHBoYW51bWVyaWNhbCIsImNoYXJhY3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-alphanumerical/index.js\n");

/***/ })

};
;