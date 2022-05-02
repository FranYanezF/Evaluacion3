import Joi from "joi";
import { CreateTaskDTO, UpdateTaskDTO } from "../dto/TaskDTO";
import { CreateUserDTO } from "../dto/UserDTO";

export const CreateTaskSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    done: Joi.boolean().required(),
    user_id : Joi.number()
})

export const UpdateTaskSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
    id: Joi.number(),
    title: Joi.string(),
    content: Joi.string(),
    done: Joi.boolean(),
    user_id : Joi.number()
})

export const CreateUserSchema: Joi.ObjectSchema<CreateUserDTO> = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    pass : Joi.string().required()
})
