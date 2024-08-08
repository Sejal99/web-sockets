import express from "express";
import { Server } from "socket.io";
import {createServer} from "http";
import dotenv from 'dotenv'
dotenv.config()
const app=express();

app.use(express.json());

const server= createServer(app);
const io=new Server(server,{
    cors:{
        origin:"*"
    }
})

app.get("/",(req,res)=>{
    res.send('hello');
    
})

io.on("connection",(socket)=>{
console.log("user connected");
console.log("id",socket.id);


})
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});