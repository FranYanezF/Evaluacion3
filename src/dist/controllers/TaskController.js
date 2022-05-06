"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskSchemas_1 = require("../models/validators/taskSchemas");
const TaskRepository_1 = __importDefault(require("../repositories/TaskRepository"));
class TaskController {
    constructor() {
        this.GetAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const repository = new TaskRepository_1.default(parseInt(user.sub));
            const tasks = yield repository.FindAll();
            res.json(tasks);
        });
        this.GetByid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = req.user;
            const repository = new TaskRepository_1.default(parseInt(user.sub));
            const tasks = yield repository.FindByid(parseInt(id));
            res.json(tasks);
        });
        this.Create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tasks = req.body;
            try {
                yield taskSchemas_1.CreateTaskSchema.validateAsync(tasks);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
            const user = req.user;
            const repository = new TaskRepository_1.default(parseInt(user.sub));
            const newTask = yield repository.Create(tasks);
            res.json(newTask);
        });
        this.Update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tasks = req.body;
            try {
                yield taskSchemas_1.UpdateTaskSchema.validateAsync(tasks);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
            const user = req.user;
            const repository = new TaskRepository_1.default(parseInt(user.sub));
            yield repository.Update(parseInt(id), tasks);
            res.sendStatus(204);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = req.user;
            const repository = new TaskRepository_1.default(parseInt(user.sub));
            yield repository.delete(parseInt(id));
            res.sendStatus(204);
        });
    }
}
exports.default = TaskController;
