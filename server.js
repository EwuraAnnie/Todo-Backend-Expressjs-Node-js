const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const {Schema} = require("mongoose");


app.use(express.json());

// model schema
const todo = Schema({
    name: {
        type: String,
        required: true,
    }
}, {timeStamp: true});




app.listen(8080, console.log("Hi there, my yoloo is connected!!"))

//http://localhost:8080