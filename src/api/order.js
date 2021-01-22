const { Router } = require("express");

const api = Router();

api.post("/api/order/place", (req, res) => {
    const body = {
        purchaseId: 1,
        status: "order-accepted",
        orderDate: new Date(2021, 1, 21, 22, 0),
        sendingDate: new Date(2021, 1, 22, 10, 0),
    };

    res.json(body);
});

module.exports = api;
