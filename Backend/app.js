const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config();
const app = express();
const router = require("./routes/UserRoute.js")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT;
const Url = process.env.MONGO_URL;

async function main(){
    await mongoose.connect(Url);
}

main().then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log("err");
});

app.use("/", router)

app.use((err, req, res, next)=>{
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).json({message: message});
})

app.listen(PORT,()=>{
    console.log(`app listening on port: localhost:${PORT}/`);
})