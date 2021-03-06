"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/api/v1', routes_1.default);
app.get('/maxi', (_req, res) => {
    res.send("Hola Maxi");
});
app.use((_req, res) => {
    res.status(404).json({
        message: 'Not founder'
    });
});
exports.default = app;
