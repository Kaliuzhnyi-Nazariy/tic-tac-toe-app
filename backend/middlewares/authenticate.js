const HttpError = require("../helpers/httpError");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  console.log("HEADERS: ", req.headers);
  const [bearer, token] = await authorization.split(" ");

  if (bearer !== "Bearer") next(HttpError(401));

  try {
    const { id } = await jwt.decode(token, SECRET_KEY);

    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) next(HttpError(401));

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in middleware/authenticate: ", error.message);
    next(HttpError(401, `${error.message}`));
  }
};

module.exports = authenticate;
