"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fault";
exports.ids = ["vendor-chunks/fault"];
exports.modules = {

/***/ "(ssr)/./node_modules/fault/index.js":
/*!*************************************!*\
  !*** ./node_modules/fault/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar formatter = __webpack_require__(/*! format */ \"(ssr)/./node_modules/format/format.js\");\nvar fault = create(Error);\nmodule.exports = fault;\nfault.eval = create(EvalError);\nfault.range = create(RangeError);\nfault.reference = create(ReferenceError);\nfault.syntax = create(SyntaxError);\nfault.type = create(TypeError);\nfault.uri = create(URIError);\nfault.create = create;\n// Create a new `EConstructor`, with the formatted `format` as a first argument.\nfunction create(EConstructor) {\n    FormattedError.displayName = EConstructor.displayName || EConstructor.name;\n    return FormattedError;\n    function FormattedError(format) {\n        if (format) {\n            format = formatter.apply(null, arguments);\n        }\n        return new EConstructor(format);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmF1bHQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxZQUFZQyxtQkFBT0EsQ0FBQztBQUV4QixJQUFJQyxRQUFRQyxPQUFPQztBQUVuQkMsT0FBT0MsT0FBTyxHQUFHSjtBQUVqQkEsTUFBTUssSUFBSSxHQUFHSixPQUFPSztBQUNwQk4sTUFBTU8sS0FBSyxHQUFHTixPQUFPTztBQUNyQlIsTUFBTVMsU0FBUyxHQUFHUixPQUFPUztBQUN6QlYsTUFBTVcsTUFBTSxHQUFHVixPQUFPVztBQUN0QlosTUFBTWEsSUFBSSxHQUFHWixPQUFPYTtBQUNwQmQsTUFBTWUsR0FBRyxHQUFHZCxPQUFPZTtBQUVuQmhCLE1BQU1DLE1BQU0sR0FBR0E7QUFFZixnRkFBZ0Y7QUFDaEYsU0FBU0EsT0FBT2dCLFlBQVk7SUFDMUJDLGVBQWVDLFdBQVcsR0FBR0YsYUFBYUUsV0FBVyxJQUFJRixhQUFhRyxJQUFJO0lBRTFFLE9BQU9GO0lBRVAsU0FBU0EsZUFBZUcsTUFBTTtRQUM1QixJQUFJQSxRQUFRO1lBQ1ZBLFNBQVN2QixVQUFVd0IsS0FBSyxDQUFDLE1BQU1DO1FBQ2pDO1FBRUEsT0FBTyxJQUFJTixhQUFhSTtJQUMxQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdjAgY2xvbmUgd2l0aCBjb3BpbG90a2l0LCBuZXh0LmpzLCBhbmQgb3BlbmFpIGdwdDQvLi9ub2RlX21vZHVsZXMvZmF1bHQvaW5kZXguanM/MTUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIGZvcm1hdHRlciA9IHJlcXVpcmUoJ2Zvcm1hdCcpXG5cbnZhciBmYXVsdCA9IGNyZWF0ZShFcnJvcilcblxubW9kdWxlLmV4cG9ydHMgPSBmYXVsdFxuXG5mYXVsdC5ldmFsID0gY3JlYXRlKEV2YWxFcnJvcilcbmZhdWx0LnJhbmdlID0gY3JlYXRlKFJhbmdlRXJyb3IpXG5mYXVsdC5yZWZlcmVuY2UgPSBjcmVhdGUoUmVmZXJlbmNlRXJyb3IpXG5mYXVsdC5zeW50YXggPSBjcmVhdGUoU3ludGF4RXJyb3IpXG5mYXVsdC50eXBlID0gY3JlYXRlKFR5cGVFcnJvcilcbmZhdWx0LnVyaSA9IGNyZWF0ZShVUklFcnJvcilcblxuZmF1bHQuY3JlYXRlID0gY3JlYXRlXG5cbi8vIENyZWF0ZSBhIG5ldyBgRUNvbnN0cnVjdG9yYCwgd2l0aCB0aGUgZm9ybWF0dGVkIGBmb3JtYXRgIGFzIGEgZmlyc3QgYXJndW1lbnQuXG5mdW5jdGlvbiBjcmVhdGUoRUNvbnN0cnVjdG9yKSB7XG4gIEZvcm1hdHRlZEVycm9yLmRpc3BsYXlOYW1lID0gRUNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IEVDb25zdHJ1Y3Rvci5uYW1lXG5cbiAgcmV0dXJuIEZvcm1hdHRlZEVycm9yXG5cbiAgZnVuY3Rpb24gRm9ybWF0dGVkRXJyb3IoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgZm9ybWF0ID0gZm9ybWF0dGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVDb25zdHJ1Y3Rvcihmb3JtYXQpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJyZXF1aXJlIiwiZmF1bHQiLCJjcmVhdGUiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmFsIiwiRXZhbEVycm9yIiwicmFuZ2UiLCJSYW5nZUVycm9yIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlRXJyb3IiLCJzeW50YXgiLCJTeW50YXhFcnJvciIsInR5cGUiLCJUeXBlRXJyb3IiLCJ1cmkiLCJVUklFcnJvciIsIkVDb25zdHJ1Y3RvciIsIkZvcm1hdHRlZEVycm9yIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiZm9ybWF0IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/fault/index.js\n");

/***/ })

};
;