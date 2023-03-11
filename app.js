import mongoose from "mongoose";
import bodyParser from "body-parser";
// import cors from "cors"
import dotenv from "dotenv"
import user from "./src/routes/userRoute.js"
import express from "express"
//
dotenv.config({ path: './.env' });
const app = express();
//
app.use('/api/user',user);
//
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT, () => {
    console.log('\x1b[34m%s\x1b[0m', `serverIsRunningOnThePort${process.env.PORT}`);
})
//
//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log('\x1b[35m%s\x1b[0m',"dbConnected")
})
