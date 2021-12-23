const mongoose = require("mongoose")

const {Schema} = mongoose

const todoSchema = Schema({
    title: {
        type:String,
        require: true
    },
    description: {
        type: String,

    },
    isCompleted:{
        type: Boolean,
        default: false
    },
}, {timestamp: true})
const TodoModel = mongoose.model("Todo",todoSchema)

export default TodoModel