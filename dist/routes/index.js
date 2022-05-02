"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthRoutes_1 = __importDefault(require("./healthRoutes"));
const taskroutes_1 = __importDefault(require("./taskroutes"));
const oauthRoutes_1 = __importDefault(require("./oauthRoutes"));
const tokenValidator_1 = __importDefault(require("../middlewares/tokenValidator"));
const apiRoutes = (0, express_1.Router)();
apiRoutes.use('/', healthRoutes_1.default);
apiRoutes.use('/tasks', (0, tokenValidator_1.default)(), taskroutes_1.default);
apiRoutes.use('/auth', oauthRoutes_1.default);
exports.default = apiRoutes;
