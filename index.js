import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const TodoModel = "TodoSchema/todoSchema.js"
const app = express();

dotenv.config();
app.use(cors());

const port = process.env.PORT || 9000;
// const url = process.env.DB_URL
app.use(express.json())

//Connection method to database
mongoose.connect(process.env.DB_URL,{
   useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => console.log("Ms.Annie database connected successfully...")).catch((error) => {console.log(error)});


////home route
app.get("/",(req,res)=>{
    res.send("Welcome to AnnieOfficial Todo Api")
});

//Get all Todos route
app.get("/todos",async(req,res)=>{
    const todo = await TodoModel.find();
    if(todo){

       return res.status(200).json({
            message: "Fetch all todos from database",
            model:todo
        })
    }else{
        return res.status(400).json({
            message: "Failed to fetch todos from database",
            data: todo
        })
    }
});


///Create a new Todo into database
app.post("/create",async(req,res)=>{
    const{title,description,isCompleted} = req.body
    const createTodo = await TodoModel.create({
        title,
        description,
        isCompleted
    });
    if(createTodo){
    return res.status(201).json({
        message:"Todo created successfully",
        data: createTodo
    })
}else{
    return res.status(204).json({
        message:"failed to create Todo"
    })
}
})


app.listen(port,()=>{
    console.log("Todo server running successfully")
});
