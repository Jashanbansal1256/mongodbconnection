import express from "express";
import dotenv from 'dotenv';
import Connection from './connection/db.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
   console.log(`runnig on port  ${port}`); ;
});

Connection();
