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
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const jwt_1 = require("../lib/jwt");
class AuthController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const credential = req.body;
            try {
                yield taskSchemas_1.CreateUserSchema.validateAsync(credential);
            }
            catch (err) {
                res.status(400).json({ message: err.message });
                return;
            }
            const repository = new UserRepository_1.default();
            const userFromDB = yield repository.FindByEmail(credential.email);
            if (!userFromDB || userFromDB.pass !== credential.pass) {
                res.status(403).json({ message: "sin credenciales" });
                return;
            }
            const token = (0, jwt_1.generateToken)(userFromDB);
            res.json(token);
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            try {
                yield taskSchemas_1.CreateUserSchema.validateAsync(user);
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
            const repository = new UserRepository_1.default();
            yield repository.Create(user);
            res.sendStatus(201);
        });
    }
}
exports.default = AuthController;
