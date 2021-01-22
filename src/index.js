const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const auth = require("./api/auth");
const store = require("./api/store");

const app = express();
const port = 3004;

app.use(cors);
app.use(bodyParser.json());
app.use(auth);
app.use(store);

app.listen(process.env.PORT || port, function () {
    console.log("Graduation project running!");
});
