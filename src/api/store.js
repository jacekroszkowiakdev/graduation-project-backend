const { Router } = require("express");

const api = Router();

api.get("/api/product/list", (req, res) => {
    const body = [
        {
            id: 1,
            name: "pampers 10pcs",
            description: "the safest. 2x softer",
            price: 1.5,
            currency: "eur",
            image:
                "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
                "?odnWidth=612&odnHeight=612&odnBg=ffffff",
            images: [],
        },
        {
            id: 2,
            name: "pampers 10pcs",
            description: "the safest. 2x softer",
            price: 41.5,
            currency: "eur",
            image:
                "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
                "?odnWidth=612&odnHeight=612&odnBg=ffffff",
            images: [],
        },
        {
            id: 3,
            name: "pampers 10pcs",
            description: "the safest. 2x softer",
            price: 112.54,
            currency: "eur",
            image:
                "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
                "?odnWidth=612&odnHeight=612&odnBg=ffffff",
            images: [],
        },
    ];

    res.json(body);
});

api.get("/api/product/:id", (req, res) => {
    const { id } = req.params;

    const body = {
        id,
        name: "pampers 10pcs",
        description: "the safest. 2x softer",
        price: 1.5,
        currency: "eur",
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
    };
    res.json(body);
});

module.exports = api;
