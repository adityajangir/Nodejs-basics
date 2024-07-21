import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import handleroutes from './routes/handlerroutes.js'


const app = express();
app.use(express.json());
dotenv.config();
const mongoDbURL = process.env.mongoDbURL;

mongoose.connect(mongoDbURL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(()=>{
    console.log("Couldn't connect to MongoDB");
})




app.use('/', handleroutes);

app.listen(3000, () => {
    console.log("Listening to port 3000");
})

