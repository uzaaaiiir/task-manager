const mongoose = require("mongoose");

const connection = process.env.MONGODB_URL;
const options = {
    useNewUrlParser: true,
};

mongoose.set("strictQuery", false);
mongoose.connect(connection, options);
