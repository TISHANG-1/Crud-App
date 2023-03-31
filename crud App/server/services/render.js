const axios = require('axios') ; 

exports.homeRoutes= (req , res)=> 
{   
    axios.get('http://localhost:3000/api/users')
    .then(function(response){ 
         console.log(response) ;  
        res.render('index.ejs' , {users: response.data}) ; 
    })
    .catch(err=>{
         res.status(500).send("there is an error")  ; 
    })
}
exports.update_user = (req , res)=> 
{   var q1 =  req.query.id;
     
    axios.get('http://localhost:3000/api/users' , {params : {id :q1 }})
    .then(function(userdata) { 
        console.log("here we are and  below is the data") ; 
       
     
             
        res.render('update_user.ejs' , {user: userdata.data}) ; 

    })
    .catch(err=>{ 
          res.status(500).send({message: "error :: occured"}); 
    })
}

exports.add_user = (req , res)=> 
{ 
    res.render('add_user.ejs')
}