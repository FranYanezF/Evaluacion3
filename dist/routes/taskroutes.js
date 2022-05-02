"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
const taskroutes = (0, express_1.Router)();
const controller = new TaskController_1.default();
taskroutes.get('/', controller.GetAll);
taskroutes.get('/:id', controller.GetByid);
taskroutes.post('/create', controller.Create);
taskroutes.put('/:id', controller.Update);
taskroutes.delete('/:id', controller.delete);
exports.default = taskroutes;
