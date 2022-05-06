import { Router } from "express";
import TaskController from "../controllers/TaskController";

const taskroutes = Router()
const controller = new TaskController()

taskroutes.get('/', controller.getAll)
taskroutes.get('/:id', controller.getByid)
taskroutes.post('/create', controller.create)
taskroutes.put('/:id', controller.update)
taskroutes.delete('/:id', controller.delete)

export default taskroutes

