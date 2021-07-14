const { Router } = require('express');
const user = require('./user.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routesManager = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routesManager.use('/user', user)

module.exports = routesManager;