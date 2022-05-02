 interface BaseTaskDTO {
    id?: number 
    title: string
    content: string
    done : boolean 
    user_id?: number | null
}

export interface TaskDTO extends BaseTaskDTO {
    id: number 

}

export interface CreateTaskDTO extends BaseTaskDTO {
}

export interface UpdateTaskDTO extends Partial<BaseTaskDTO> {}
