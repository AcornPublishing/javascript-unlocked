"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _foo = require("./foo");

var foo = _interopRequireWildcard(_foo);

console.log(foo.bar); // bar
console.log(foo.baz); // baz