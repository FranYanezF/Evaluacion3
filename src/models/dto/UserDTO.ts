import { TaskDTO } from "./TaskDTO"

export interface BaseUserDTO {
    first_name: string
    last_name: string
    email : string 
    task? : TaskDTO | null
}

export interface UserDTO extends BaseUserDTO {
    id: number 
    pass?: string
}

export interface CreateUserDTO extends BaseUserDTO {
    pass: string 
}

export interface UserTokenPayload {
    sub : string
    mail : string 
    exp : number
    iat: number
}


