exports.id = "main";
exports.modules = {

/***/ "./src/lights/lights.service.ts":
/*!**************************************!*\
  !*** ./src/lights/lights.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.update = exports.find = exports.findAll = void 0;\n/**\n * In-Memory Store\n */\nvar lights = [\n    {\n        id: 1,\n        name: \"Salon 1\",\n        state: {\n            value: 0\n        }\n    },\n    {\n        id: 2,\n        name: \"Salon 2\",\n        state: {\n            value: 50\n        }\n    },\n    {\n        id: 3,\n        name: \"Cocina 1\",\n        state: {\n            value: 100\n        }\n    },\n];\n/**\n * Service Methods\n */\nvar findAll = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, lights.slice()];\n    });\n}); };\nexports.findAll = findAll;\nvar find = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var record;\n    return __generator(this, function (_a) {\n        record = lights.find(function (light) { return light.id === id; });\n        if (record) {\n            return [2 /*return*/, __assign({}, record)];\n        }\n        throw new Error(\"No record found\");\n    });\n}); };\nexports.find = find;\nvar update = function (updatedLight) { return __awaiter(void 0, void 0, void 0, function () {\n    var update;\n    return __generator(this, function (_a) {\n        update = new Promise(function (resolve, reject) {\n            try {\n                exports.find(updatedLight.id)\n                    .then(function (response) {\n                    var newLigths = lights.slice();\n                    var indexLight = lights.findIndex(function (light) { return light.id === updatedLight.id; });\n                    newLigths[indexLight] = updatedLight;\n                    lights = newLigths;\n                    return updatedLight;\n                })\n                    .catch(function (response) {\n                    reject({\n                        status: response.status,\n                        message: \"El token ha expirado\"\n                    });\n                });\n                if (payLoad.exp <= moment().unix()) {\n                    reject({\n                        status: 401,\n                        message: \"El token ha expirado\"\n                    });\n                }\n                resolve(payLoad.sub);\n            }\n            catch (err) {\n                console.log(\"Error token: \" + err);\n                reject({\n                    status: 500,\n                    message: \"Invalid token\"\n                });\n            }\n        });\n        return [2 /*return*/, update];\n    });\n}); };\nexports.update = update;\n\n\n//# sourceURL=webpack:///./src/lights/lights.service.ts?");

/***/ })

};