import { Router } from "express";
import TaskController from "../controllers/TaskController";

const taskroutes = Router()
const controller = new TaskController()

taskroutes.get('/', controller.GetAll)
taskroutes.get('/:id', controller.GetByid)
taskroutes.post('/create', controller.Create)
taskroutes.put('/:id', controller.Update)
taskroutes.delete('/:id', controller.delete)

export default taskroutes

