// Importamos los Routers 
import taskRouter from './task.routes.js'
import authRoutes from './auth.routes.js'

// Está función recibe la apliacación como parámetro de entrada
export function routerAPI(app){
	// Definimos los endPoints
    app.use('/auth', authRoutes);
    app.use('/task', taskRouter);
}