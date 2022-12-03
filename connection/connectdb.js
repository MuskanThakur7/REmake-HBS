let mongoose = require('mongoose')
let URI = "mongodb+srv://muskan:asdfghjkl@cluster0.og8mmmw.mongodb.net/?retryWrites=true&w=majority"
let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        })
        console.log("Connected to the db")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb