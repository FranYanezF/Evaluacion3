"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../lib/jwt");
function validarToken() {
    return function (req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.sendStatus(401).json({ message: "No autorizado" });
            return;
        }
        const [bearer, token] = authHeader.split(' ');
        if (bearer != "Bearer") {
            res.sendStatus(401).json({ message: "invalid token" });
            return;
        }
        try {
            const tokenPayload = (0, jwt_1.verificateToken)(token);
            req.user = tokenPayload;
        }
        catch (_a) {
            res.sendStatus(401).json({ message: "invalid token" });
            return;
        }
        return next();
    };
}
exports.default = validarToken;
