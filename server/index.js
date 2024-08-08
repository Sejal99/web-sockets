import express from "express";
import { Server } from "socket.io";
import dotenv from 'dotenv'
dotenv.config()
const app=express();

app.use(express.json());

const server=new Server(app);
const io=new Server(server)

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});