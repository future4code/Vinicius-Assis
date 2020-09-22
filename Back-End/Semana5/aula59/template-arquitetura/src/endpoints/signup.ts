import {Request, Response} from 'express'
import { IdGenerator } from '../services/IdGenerator';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { UserBusiness } from '../business/userBusiness';

export const signup = async (req: Request, res: Response) => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const useBusiness = new UserBusiness();
        const token = await useBusiness.signUp(userData.name, userData.email, userData.password);

        res.status(200).send({
            message: "Usuário criado com sucesso",
            token
        })

    } catch (error) {
        res.status(400).send({
            messege: error.messege
        })
    }
}