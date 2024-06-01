const HttpError = require("../helpers/HttpError"); // Ensure the path is correct

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message)); // Use the HttpError function
    } else {
      next();
    }
  };
};

module.exports = validateBody;
