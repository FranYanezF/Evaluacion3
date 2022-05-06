"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const authroutes = (0, express_1.Router)();
const controller = new AuthController_1.default();
authroutes.post('/login', controller.login);
authroutes.post('/register', controller.register);
exports.default = authroutes;
