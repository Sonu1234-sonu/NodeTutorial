import express from 'express';
import AuthRouter from "./src/routes/authRouter.js";
const app=express();
 app.use("/auth",AuthRouter);
app.get("/",(request,response)=>{
    response.json({message:"Mai server hoon"})
})




 app.listen(5000,()=>{
    console.log("Server start ho gya 5000 port pe")
 })