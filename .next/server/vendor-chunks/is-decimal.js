"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-decimal";
exports.ids = ["vendor-chunks/is-decimal"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\nmodule.exports = decimal;\n// Check if the given character code, or the character code at the first\n// character, is decimal.\nfunction decimal(character) {\n    var code = typeof character === \"string\" ? character.charCodeAt(0) : character;\n    return code >= 48 && code <= 57 /* 0-9 */ ;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtZGVjaW1hbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLHdFQUF3RTtBQUN4RSx5QkFBeUI7QUFDekIsU0FBU0EsUUFBUUMsU0FBUztJQUN4QixJQUFJQyxPQUFPLE9BQU9ELGNBQWMsV0FBV0EsVUFBVUUsVUFBVSxDQUFDLEtBQUtGO0lBRXJFLE9BQU9DLFFBQVEsTUFBTUEsUUFBUSxHQUFHLE9BQU87QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92MCBjbG9uZSB3aXRoIGNvcGlsb3RraXQsIG5leHQuanMsIGFuZCBvcGVuYWkgZ3B0NC8uL25vZGVfbW9kdWxlcy9pcy1kZWNpbWFsL2luZGV4LmpzPzk2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgZGVjaW1hbC5cbmZ1bmN0aW9uIGRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgLyogMC05ICovXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRlY2ltYWwiLCJjaGFyYWN0ZXIiLCJjb2RlIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-decimal/index.js\n");

/***/ })

};
;