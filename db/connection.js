const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongo db Atlas successfully connected to EMS Server...");
}).catch((err)=>{
    console.log(`Mongodb connection failed: ${err}`);
})