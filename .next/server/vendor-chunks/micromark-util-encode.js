"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-encode";
exports.ids = ["vendor-chunks/micromark-util-encode"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-encode/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark-util-encode/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\nconst characterReferences = {\n    '\"': \"quot\",\n    \"&\": \"amp\",\n    \"<\": \"lt\",\n    \">\": \"gt\"\n};\n/**\n * Encode only the dangerous HTML characters.\n *\n * This ensures that certain characters which have special meaning in HTML are\n * dealt with.\n * Technically, we can skip `>` and `\"` in many cases, but CM includes them.\n *\n * @param {string} value\n *   Value to encode.\n * @returns {string}\n *   Encoded value.\n */ function encode(value) {\n    return value.replace(/[\"&<>]/g, replace);\n    /**\n   * @param {string} value\n   * @returns {string}\n   */ function replace(value) {\n        // @ts-expect-error Hush, it’s fine.\n        return \"&\" + characterReferences[value] + \";\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZW5jb2RlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxzQkFBc0I7SUFBQyxLQUFLO0lBQVEsS0FBSztJQUFPLEtBQUs7SUFBTSxLQUFLO0FBQUk7QUFFMUU7Ozs7Ozs7Ozs7O0NBV0MsR0FDTSxTQUFTQyxPQUFPQyxLQUFLO0lBQzFCLE9BQU9BLE1BQU1DLE9BQU8sQ0FBQyxXQUFXQTtJQUVoQzs7O0dBR0MsR0FDRCxTQUFTQSxRQUFRRCxLQUFLO1FBQ3BCLG9DQUFvQztRQUNwQyxPQUFPLE1BQU1GLG1CQUFtQixDQUFDRSxNQUFNLEdBQUc7SUFDNUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3YwIGNsb25lIHdpdGggY29waWxvdGtpdCwgbmV4dC5qcywgYW5kIG9wZW5haSBncHQ0Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWVuY29kZS9pbmRleC5qcz8zNzAzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYXJhY3RlclJlZmVyZW5jZXMgPSB7J1wiJzogJ3F1b3QnLCAnJic6ICdhbXAnLCAnPCc6ICdsdCcsICc+JzogJ2d0J31cblxuLyoqXG4gKiBFbmNvZGUgb25seSB0aGUgZGFuZ2Vyb3VzIEhUTUwgY2hhcmFjdGVycy5cbiAqXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCBjZXJ0YWluIGNoYXJhY3RlcnMgd2hpY2ggaGF2ZSBzcGVjaWFsIG1lYW5pbmcgaW4gSFRNTCBhcmVcbiAqIGRlYWx0IHdpdGguXG4gKiBUZWNobmljYWxseSwgd2UgY2FuIHNraXAgYD5gIGFuZCBgXCJgIGluIG1hbnkgY2FzZXMsIGJ1dCBDTSBpbmNsdWRlcyB0aGVtLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBFbmNvZGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2UpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZSh2YWx1ZSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSHVzaCwgaXTigJlzIGZpbmUuXG4gICAgcmV0dXJuICcmJyArIGNoYXJhY3RlclJlZmVyZW5jZXNbdmFsdWVdICsgJzsnXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJSZWZlcmVuY2VzIiwiZW5jb2RlIiwidmFsdWUiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-encode/index.js\n");

/***/ })

};
;