var userdb = require("../model/model") ;
// create and save new user 

exports.create = (req , res)=>{
    // validate a request  
    if(!req.body){
         res.status(400).send({message: "content can not be empty"}) ; 
         return ; 
    } 
    const user = new userdb({ 
        name: req.body.name,
        email: req.body.email, 
        gender: req.body.gender, 
        status: req.body.status 
    }) 
    // save user in the database 
    user  
       .save(user)
       .then(data => {
        // res.send(data) ;
        res.redirect('/add_user') ; 
       }) 
       .catch(err =>{
           res.status(500).send({message: err.message ||"some error occured while creating operation"}) ; 
       }) ; 


}

// retrive and return all users/ retrive and return a single user
exports.find = (req , res)=>{



    if(req.params.id){ 
        const id =  req.query.id ; 
        userdb.findById(id) 
        .then(data=>{
            
        if(!data){
            ({message: "No user find for this id"}) ;
        }
        else { 
              res.status(200).send(data) ;
        }} )

        .catch(err =>  
            {
               res.status(500).send({message:"Ops! error occured"})
            })
    }
    else{
    userdb.find()
    .then(user => {
        res.send(user)
    }) 
    .catch(err=> { 
          res.status(500).send({message:"error  occured not find the object"}) ;
    }) } 

}
// update a new idetified user by user id 
exports.update = (req , res)=>{
    if(!req.body){ 

         return res
         .status(400)  
         .send({message: "Data not find for update"}) ;
    }    

    const id = req.params.id; 
    userdb.findByIdAndUpdate(id , req.body , {useFindAndModify: false})  
    .then(data =>{
        if(!data){ 
             res.status(404).send({message: "cannot update user with the id ${id}"}) ;
        }
        else{ 
            res.send(data) ;
        }
    } )
    .catch(err=>{
          res.status(500).send({message: "error generated while updating the data"})
    })
    
    


} 
// delete a user specified user id in the request  

exports.delete = (res, req)=> { 
      const id = req.params.id ; 
      userdb.findByIdAndDelete(id) 
      .then (data => { 
         if(!data){ 
              res.status(400).send({message: "the user id not found"})
         } 
         else{ 
              res.status(200).send({message:"users is deleted successfully"}) ; 
         }
      })
      .catch(err => {
          res.status(500).send({message:"here in the delete section we encountered an error"}) ;
      })
}