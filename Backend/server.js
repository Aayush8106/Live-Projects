import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app=express();
const Port=3000;

const currentFile=fileURLToPath(import.meta.url);
const currentFolder=dirname(currentFile);

app.get("/",(req,res)=>{
    res.sendFile(path.join(currentFolder,"..","./Frontend/index.html"));
})

app.listen(Port,()=>{
    console.log(`Server is on Port:${Port}`);
});