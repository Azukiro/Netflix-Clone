import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";

//App config
dotenv.config();

const app = express();

//Middlewwares
app.use(express.json());

//Db config
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(
        () => console.log('DB Connected!')
    )
    .catch(
        err => {
            console.log(Error, err.message);
        }
    );  

//API Endpoints
app.use("/api/auth", authRoutes);

app.use("/api/users", usersRoutes);
//Listener
app.listen(process.env.PORT, () => console.log(`Server is running on localhost : ${process.env.PORT}`));
