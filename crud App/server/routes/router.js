const express  = require('express') ;
const route = express.Router()  
const services  = require('../services/render') ;     
const controller =  require('../controller/controller')


// @description  
// @method GET homePage

route.get('/' ,  services.homeRoutes) ; 

// @description  
// @method GET adduser Page
route.get('/add_user' ,  services.add_user ) ;
// @description  
// @method GET Update User Page
route.get('/update_user' ,  services.update_user) ;


/// API 

route.post("/api/users" , controller.create) ;
route.put("/api/users/:id" , controller.update) ;
route.post("/api/users/:id " , controller.delete) ;
route.get("/api/users" , controller.find) ;
module.exports = route ; 