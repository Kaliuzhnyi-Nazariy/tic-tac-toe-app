const { User } = require("../models/userSchema");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { nickname, password, email } = req.body;
  console.log(nickname, password, email);

  // const user = User.findOne({ email });

  // if (user) {
  //   return res.status(409).json("User is already exist!");
  // }

  const hashedPssw = await bcrypt.hash(password, 10);

  // const newUser = new User.create({
  //   ...req.body,
  //   password: hashedPssw,
  // });
  const newUser = new User({
    ...req.body,
    password: hashedPssw,
  });

  console.log(newUser);

  res.status(201).json({ email: newUser.email, nickname: newUser.nickname });
};

module.exports = signup;
