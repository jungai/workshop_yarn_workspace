"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
exports.app = express_1["default"]();
exports.app.get('/', function (_req, res) {
    res.send('june');
});
exports.add = function (a, b) { return a + b; };
