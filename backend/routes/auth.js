import { Router } from "express";
import User from "../models/User.js";
import CryptoJs from 'crypto-js';
import JWT from 'jsonwebtoken';
const router = Router();
//Register
router.post(
    "/register",
    async (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        });
        try {
            const created = await user.save();
            res.status(201).json(created);
            
        } catch (err) {
            res.status(500).json(err);
            
        }
    }
)

//LOGIN
router.post('/login',
    async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            !user && res.status(401).json("Wrong password or username!");

            const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

            originalPassword !== req.body.password &&
            res.status(401).json("Wrong password or username!");
            
            const accessToken = JWT.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: "5d"
                }
            );
            const { password, ...infos } = user._doc;//user document
            res.status(200).json({...infos, accessToken});
        } catch (err) {
            res.status(500).json({ message: ''+err  + req.body.email});
        }
    }
);

export default router;
