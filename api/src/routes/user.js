const { Router } = require('express');
const routesUser = Router();

routesUser.get('/',(req,res)=>{
  res.send("User")
})

module.exports = routesUser