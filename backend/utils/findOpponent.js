import User from "../models/userSchema.js";

export const findOpponent = async () => {
  try {
    const users = await User.find();
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};
