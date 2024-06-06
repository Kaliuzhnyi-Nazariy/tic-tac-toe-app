const { model, Schema } = require("mongoose");
const Joi = require("joi");

const { handleMongoose } = require("../helpers/handleMongoose");

const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = Joi.extend(joiPasswordExtendCore);

const userSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    isSearchingGame: {
      type: Boolean,
      default: false,
    },
    token: { type: String, default: "" },
  },
  { timestamps: true }
);

const signupSchema = Joi.object({
  nickname: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),
});

const schemas = { signupSchema, loginSchema };

const User = model("user", userSchema);

module.exports = { User, schemas };
