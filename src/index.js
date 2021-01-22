const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./api/auth");
const store = require("./api/store");

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(auth);
app.use(store);

app.listen(process.env.PORT || port, function () {
    console.log("Graduation project running!");
});
