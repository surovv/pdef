!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.library=n():e.library=n()}(this,function(){return function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar postdef = exports.postdef = function postdef(fn) {\n  return {\n    where: function where(argsObject) {\n      return fn(argsObject);\n    }\n  };\n};\n\nvar predef = exports.predef = function predef(argsObject) {\n  return {\n    in: function _in(fn) {\n      return fn(argsObject);\n    }\n  };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/pdef.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/pdef.js?')}])});