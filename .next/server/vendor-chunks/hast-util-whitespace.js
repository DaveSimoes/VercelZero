"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-whitespace";
exports.ids = ["vendor-chunks/hast-util-whitespace"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-whitespace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-whitespace/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   whitespace: () => (/* binding */ whitespace)\n/* harmony export */ });\n/**\n * Check if the given value is *inter-element whitespace*.\n *\n * @param {unknown} thing\n *   Thing to check (typically `Node` or `string`).\n * @returns {boolean}\n *   Whether the `value` is inter-element whitespace (`boolean`): consisting of\n *   zero or more of space, tab (`\\t`), line feed (`\\n`), carriage return\n *   (`\\r`), or form feed (`\\f`).\n *   If a node is passed it must be a `Text` node, whose `value` field is\n *   checked.\n */ function whitespace(thing) {\n    /** @type {string} */ const value = // @ts-expect-error looks like a node.\n    thing && typeof thing === \"object\" && thing.type === \"text\" ? thing.value || \"\" : thing;\n    // HTML whitespace expression.\n    // See <https://infra.spec.whatwg.org/#ascii-whitespace>.\n    return typeof value === \"string\" && value.replace(/[ \\t\\n\\f\\r]/g, \"\") === \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7OztDQVdDLEdBQ00sU0FBU0EsV0FBV0MsS0FBSztJQUM5QixtQkFBbUIsR0FDbkIsTUFBTUMsUUFDSixzQ0FBc0M7SUFDdENELFNBQVMsT0FBT0EsVUFBVSxZQUFZQSxNQUFNRSxJQUFJLEtBQUssU0FFakRGLE1BQU1DLEtBQUssSUFBSSxLQUNmRDtJQUVOLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsT0FBTyxPQUFPQyxVQUFVLFlBQVlBLE1BQU1FLE9BQU8sQ0FBQyxnQkFBZ0IsUUFBUTtBQUM1RSIsInNvdXJjZXMiOlsid2VicGFjazovL3YwIGNsb25lIHdpdGggY29waWxvdGtpdCwgbmV4dC5qcywgYW5kIG9wZW5haSBncHQ0Ly4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC13aGl0ZXNwYWNlL2luZGV4LmpzP2M2YjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgKmludGVyLWVsZW1lbnQgd2hpdGVzcGFjZSouXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZ1xuICogICBUaGluZyB0byBjaGVjayAodHlwaWNhbGx5IGBOb2RlYCBvciBgc3RyaW5nYCkuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciB0aGUgYHZhbHVlYCBpcyBpbnRlci1lbGVtZW50IHdoaXRlc3BhY2UgKGBib29sZWFuYCk6IGNvbnNpc3Rpbmcgb2ZcbiAqICAgemVybyBvciBtb3JlIG9mIHNwYWNlLCB0YWIgKGBcXHRgKSwgbGluZSBmZWVkIChgXFxuYCksIGNhcnJpYWdlIHJldHVyblxuICogICAoYFxccmApLCBvciBmb3JtIGZlZWQgKGBcXGZgKS5cbiAqICAgSWYgYSBub2RlIGlzIHBhc3NlZCBpdCBtdXN0IGJlIGEgYFRleHRgIG5vZGUsIHdob3NlIGB2YWx1ZWAgZmllbGQgaXNcbiAqICAgY2hlY2tlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UodGhpbmcpIHtcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGNvbnN0IHZhbHVlID1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBub2RlLlxuICAgIHRoaW5nICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcgJiYgdGhpbmcudHlwZSA9PT0gJ3RleHQnXG4gICAgICA/IC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHRleHQuXG4gICAgICAgIHRoaW5nLnZhbHVlIHx8ICcnXG4gICAgICA6IHRoaW5nXG5cbiAgLy8gSFRNTCB3aGl0ZXNwYWNlIGV4cHJlc3Npb24uXG4gIC8vIFNlZSA8aHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2U+LlxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5yZXBsYWNlKC9bIFxcdFxcblxcZlxccl0vZywgJycpID09PSAnJ1xufVxuIl0sIm5hbWVzIjpbIndoaXRlc3BhY2UiLCJ0aGluZyIsInZhbHVlIiwidHlwZSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-whitespace/index.js\n");

/***/ })

};
;