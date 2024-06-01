const app = require("./app");

const mongoose = require("mongoose");

const { MONGO_DB } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_DB)
  .then(() => {
    app.listen(3001, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
