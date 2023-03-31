const express  = require('express') ; 
const doten   = require ('dotenv');
const morgan  =  require('morgan') ;  
const path =  require('path')
const bodyparser  = require('body-parser') ; 
const connectDB =  require('./server/database/connection') ; 
const PORT =  process.env.PORT || 
8080



// connecting Database

const app = express() ; 

app.use(morgan('tiny')) ;   


// mongoDB connection 

connectDB(); 

doten.config({path:'./config'})  ; 
// parse request to body parser

app.use(bodyparser.urlencoded({extended : true})) ; 

// app.set('veiws' , path.resolve(__dirname , "veiws/ejs")) 

app.set("veiw engine" , "ejs") ; 

// load assets  
// you just need to specify the virtuall path and file name thats it
app.use('/css' , express.static(path.resolve(__dirname , 'asset/css'))
);
 app.use('/img' , express.static(path.resolve(__dirname , 'asset/img'))
) ;
app.use('/js' , express.static(path.resolve(__dirname , 'asset/js'))
) ;   

 
// css/style.css     

// embedded javascript template 

// now how to create the view for this application we are going to create using ejs , create ejs file to create html templates

// load routers 
app.use('/' , require('./server/routes/router')) ; 

app.listen(3000 , () => {console.log('server is running on http://localhost:3000')})  ; 