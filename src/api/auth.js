const { Router } = require("express");

const api = Router();

api.get("/api/login", (req, res) => {
    const body = {
        status: true,
        message: "user logged in as jacek",
    };
    res.json(body);
});

api.post("/api/register", (req, res) => {
    const body = {
        status: true,
        message: "user logged in as jacek",
    };
    res.json(body);
});

api.get("/api/logout", (req, res) => {
    const body = {
        status: true,
        message: "user logged out",
    };
    res.json(body);
});

module.exports = api;
