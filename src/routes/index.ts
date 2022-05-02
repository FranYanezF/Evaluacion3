import { Router } from 'express'
import healthRoutes from './healthRoutes'
import taskroutes from './taskroutes'
import authroutes from './oauthRoutes'
import validarToken from '../middlewares/tokenValidator'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/tasks',validarToken(), taskroutes)
apiRoutes.use('/auth', authroutes)



export default apiRoutes
