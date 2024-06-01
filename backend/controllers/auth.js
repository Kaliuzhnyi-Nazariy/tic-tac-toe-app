const { httpError } = require("../helpers");
const { User } = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
  try {
    const { nickname, password, email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json("User is already exist!");
    }

    const hashedPssw = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      nickname,
      email,
      password: hashedPssw,
    });

    await newUser.save();

    res.status(201).json({
      email: newUser.email,
      nickname: newUser.nickname,
    });
  } catch (error) {
    console.log("Error in auth/signup: ", error.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
      // return httpError(404);
    }

    const comparePssw = await bcrypt.compare(password, user.password);

    if (!comparePssw) {
      return res.status(400).json({ error: "Invalid credentials!" });
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

    await User.findByIdAndUpdate(user._id, { token });

    return res.status(200).json({ nickname: user.nickname, token: token });
  } catch (error) {
    console.log("error in auth/login: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const logout = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById({ _id });
  if (!user) {
    return res.status(409).json({ error: "kalfla" });
  }
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).json();
};

module.exports = { signup, login, logout };
