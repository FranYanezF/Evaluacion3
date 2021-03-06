import jwt from 'jsonwebtoken'
import { UserDTO, UserTokenPayload } from '../models/dto/UserDTO'

const secret = process.env.JWT_SECRET as string

if(!secret){
    throw new Error("sin token para consumir")
}

export function generateToken(user : UserDTO) : string{
    return jwt.sign(
        {sub : user.id , email : user.email},
         secret,
         {expiresIn : "7d"})
}

export function verificateToken(token : string): UserTokenPayload{
    const verify = jwt.verify(token,secret)
    return verify as UserTokenPayload
}