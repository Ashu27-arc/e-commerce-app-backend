import User from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashed,
        });

        res.json(user);
    } catch (err) {
        res.json({
            error: "Email already exists"
        });
    }
};

export const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const usr = await User.findOne({
        email
    });
    if (!usr) return res.json({
        error: "User not found"
    });

    const match = await bcrypt.compare(password, usr.password);
    if (!match) return res.json({
        error: "Incorrect Password"
    });

    res.json(usr);
};