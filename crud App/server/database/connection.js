const mongoose =  require('mongoose') ; 
const connectDB = async() =>{
    try{     console.log(process.env.MONGO_URI );   
             const st = process.env.MONGO_URI; 
            //  print(st)
             const con = await mongoose.connect( "mongodb+srv://tishangp:tishang@cluster0.vazxk2f.mongodb.net/?retryWrites=true&w=majority" , { 
                  useNewUrlParser: true, 
                  useUnifiedTopology: true, 
                //   useFindAndModify: false, 
                //   useCreateIndex: true
             })  ; 
             console.log('MongoDB connected :$(con.connection.host)')
    }
    catch(err){ 
                console.log(err) ; 
                process.exit(1);

    }

}  

module.exports =  connectDB ; 