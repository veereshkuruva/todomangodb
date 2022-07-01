const mongoose=require("mongoose");

const Taskschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type :String
    }
})

module.exports = mongoose.model('Taskschema',Taskschema);