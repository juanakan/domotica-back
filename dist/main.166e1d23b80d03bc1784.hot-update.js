exports.id = "main";
exports.modules = {

/***/ "./src/lights/lights.controller.ts":
/*!*****************************************!*\
  !*** ./src/lights/lights.controller.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.updateLight = exports.getLight = exports.getLights = void 0;\nvar LightsService = __importStar(__webpack_require__(/*! ./lights.service */ \"./src/lights/lights.service.ts\"));\nfunction getLights(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var lights, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, LightsService.findAll()];\n                case 1:\n                    lights = _a.sent();\n                    res.status(200).send(lights);\n                    return [3 /*break*/, 3];\n                case 2:\n                    e_1 = _a.sent();\n                    res.status(404).send(e_1.message);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getLights = getLights;\n// GET items/:id\nfunction getLight(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var id, light, e_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    id = parseInt(req.params.id, 10);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 3, , 4]);\n                    return [4 /*yield*/, LightsService.find(id)];\n                case 2:\n                    light = _a.sent();\n                    res.status(200).send(light);\n                    return [3 /*break*/, 4];\n                case 3:\n                    e_2 = _a.sent();\n                    res.status(404).send(e_2.message);\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getLight = getLight;\n// PUT items/\nfunction updateLight(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            LightsService.update(req.body.light)\n                .then(function (response) {\n                res.status(200).send(response);\n            })\n                .catch(function (response) {\n                res.status(response.status).send(response.message);\n            });\n            return [2 /*return*/];\n        });\n    });\n}\nexports.updateLight = updateLight;\n\n\n//# sourceURL=webpack:///./src/lights/lights.controller.ts?");

/***/ }),

/***/ "./src/lights/lights.service.ts":
/*!**************************************!*\
  !*** ./src/lights/lights.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.update = exports.find = exports.findAll = void 0;\n/**\n * In-Memory Store\n */\nvar lights = [\n    {\n        id: 1,\n        name: \"Salon 1\",\n        state: {\n            value: 0\n        }\n    },\n    {\n        id: 2,\n        name: \"Salon 2\",\n        state: {\n            value: 50\n        }\n    },\n    {\n        id: 3,\n        name: \"Cocina 1\",\n        state: {\n            value: 100\n        }\n    },\n];\n/**\n * Service Methods\n */\nvar findAll = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, lights.slice()];\n    });\n}); };\nexports.findAll = findAll;\nvar find = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var find;\n    return __generator(this, function (_a) {\n        find = new Promise(function (resolve, reject) {\n            var record = lights.find(function (light) { return light.id === id; });\n            if (record) {\n                return __assign({}, record);\n            }\n        });\n        return [2 /*return*/, find];\n    });\n}); };\nexports.find = find;\nvar update = function (updatedLight) { return __awaiter(void 0, void 0, void 0, function () {\n    var update;\n    return __generator(this, function (_a) {\n        update = new Promise(function (resolve, reject) {\n            exports.find(updatedLight.id)\n                .then(function (response) {\n                var newLigths = lights.slice();\n                var indexLight = lights.findIndex(function (light) { return light.id === updatedLight.id; });\n                newLigths[indexLight] = updatedLight;\n                lights = newLigths;\n                resolve(updatedLight);\n            })\n                .catch(function (response) {\n                reject({\n                    status: response.status,\n                    message: response.message\n                });\n            });\n        });\n        return [2 /*return*/, update];\n    });\n}); };\nexports.update = update;\n\n\n//# sourceURL=webpack:///./src/lights/lights.service.ts?");

/***/ })

};