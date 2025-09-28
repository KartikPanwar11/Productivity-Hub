const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add task'],
        trim:true,
        maxlength:[20,'Cannot exceed the limit']
    }
    ,completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)