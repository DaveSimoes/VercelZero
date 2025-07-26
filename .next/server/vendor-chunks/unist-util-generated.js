"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-generated";
exports.ids = ["vendor-chunks/unist-util-generated"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-generated/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-generated/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generated: () => (/* binding */ generated)\n/* harmony export */ });\n/**\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef NodeLike\n * @property {PositionLike | null | undefined} [position]\n */ /**\n * Check if `node` is generated.\n *\n * @param {NodeLike | null | undefined} [node]\n *   Node to check.\n * @returns {boolean}\n *   Whether `node` is generated (does not have positional info).\n */ function generated(node) {\n    return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0NBWUMsR0FFRDs7Ozs7OztDQU9DLEdBQ00sU0FBU0EsVUFBVUMsSUFBSTtJQUM1QixPQUNFLENBQUNBLFFBQ0QsQ0FBQ0EsS0FBS0MsUUFBUSxJQUNkLENBQUNELEtBQUtDLFFBQVEsQ0FBQ0MsS0FBSyxJQUNwQixDQUFDRixLQUFLQyxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxJQUN6QixDQUFDSCxLQUFLQyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsTUFBTSxJQUMzQixDQUFDSixLQUFLQyxRQUFRLENBQUNJLEdBQUcsSUFDbEIsQ0FBQ0wsS0FBS0MsUUFBUSxDQUFDSSxHQUFHLENBQUNGLElBQUksSUFDdkIsQ0FBQ0gsS0FBS0MsUUFBUSxDQUFDSSxHQUFHLENBQUNELE1BQU07QUFFN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92MCBjbG9uZSB3aXRoIGNvcGlsb3RraXQsIG5leHQuanMsIGFuZCBvcGVuYWkgZ3B0NC8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWdlbmVyYXRlZC9saWIvaW5kZXguanM/ZTRhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIFBvaW50TGlrZVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbbGluZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbHVtbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqXG4gKiBAdHlwZWRlZiBQb3NpdGlvbkxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICpcbiAqIEB0eXBlZGVmIE5vZGVMaWtlXG4gKiBAcHJvcGVydHkge1Bvc2l0aW9uTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtwb3NpdGlvbl1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGBub2RlYCBpcyBnZW5lcmF0ZWQuXG4gKlxuICogQHBhcmFtIHtOb2RlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtub2RlXVxuICogICBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYG5vZGVgIGlzIGdlbmVyYXRlZCAoZG9lcyBub3QgaGF2ZSBwb3NpdGlvbmFsIGluZm8pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVkKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICAhbm9kZSB8fFxuICAgICFub2RlLnBvc2l0aW9uIHx8XG4gICAgIW5vZGUucG9zaXRpb24uc3RhcnQgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5zdGFydC5saW5lIHx8XG4gICAgIW5vZGUucG9zaXRpb24uc3RhcnQuY29sdW1uIHx8XG4gICAgIW5vZGUucG9zaXRpb24uZW5kIHx8XG4gICAgIW5vZGUucG9zaXRpb24uZW5kLmxpbmUgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5lbmQuY29sdW1uXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZWQiLCJub2RlIiwicG9zaXRpb24iLCJzdGFydCIsImxpbmUiLCJjb2x1bW4iLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-generated/lib/index.js\n");

/***/ })

};
;