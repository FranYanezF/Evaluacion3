"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error("sin token para consumir");
}
function generateToken(user) {
    return jsonwebtoken_1.default.sign({ sub: user.id, email: user.email }, secret, { expiresIn: "7d" });
}
exports.generateToken = generateToken;
function verificateToken(token) {
    const verify = jsonwebtoken_1.default.verify(token, secret);
    return verify;
}
exports.verificateToken = verificateToken;
