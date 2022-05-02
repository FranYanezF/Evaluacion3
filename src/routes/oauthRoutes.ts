import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authroutes = Router()
const controller = new AuthController()

authroutes.post('/login', controller.login)
authroutes.post('/register', controller.register)


export default authroutes

