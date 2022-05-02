import { NextFunction, Request, Response } from "express"
import { verificateToken } from "../lib/jwt"

export default function validarToken(){
    return function(req:Request, res : Response, next : NextFunction){
        const authHeader = req.headers.authorization 
        if(!authHeader){
            res.sendStatus(401).json({message:"No autorizado"})
            return
        }
        const [bearer,token] = authHeader.split(' ')
        if( bearer != "Bearer"){
            res.sendStatus(401).json({message:"invalid token"})
            return
        }
        try{
            const tokenPayload = verificateToken(token)
            req.user = tokenPayload
        }catch{
            res.sendStatus(401).json({message:"invalid token"})
            return
        }
        return next()
    }
}