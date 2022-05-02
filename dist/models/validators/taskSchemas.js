"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = exports.UpdateTaskSchema = exports.CreateTaskSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.CreateTaskSchema = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    content: joi_1.default.string().required(),
    done: joi_1.default.boolean().required(),
    user_id: joi_1.default.number()
});
exports.UpdateTaskSchema = joi_1.default.object().keys({
    id: joi_1.default.number(),
    title: joi_1.default.string(),
    content: joi_1.default.string(),
    done: joi_1.default.boolean(),
    user_id: joi_1.default.number()
});
exports.CreateUserSchema = joi_1.default.object().keys({
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    pass: joi_1.default.string().required()
});
