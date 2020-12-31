exports.id = "main";
exports.modules = {

/***/ "./src/lights/lights.route.ts":
/*!************************************!*\
  !*** ./src/lights/lights.route.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules and Interfaces\n */\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.lightsRouter = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar LightsController = __importStar(__webpack_require__(/*! ./lights.controller */ \"./src/lights/lights.controller.ts\"));\n/**\n * Router Definition\n */\nexports.lightsRouter = express_1.default.Router();\n/**\n * Controller Definitions\n */\nexports.lightsRouter.get(\"/\", LightsController.getLights);\n// GET items/:id\nexports.lightsRouter.get(\"/:id\", LightsController.getLight);\n// PUT items/\nexports.lightsRouter.put(\"/\", LightsController.updateLight);\n\n\n//# sourceURL=webpack:///./src/lights/lights.route.ts?");

/***/ })

};