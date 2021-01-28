const { Router } = require("express");

const api = Router();
const products = [
    {
        id: 1,
        name: "pampers 2pcs",
        description: "the safest. 2x softer",
        price: 1.5,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 2,
        name: "pampers 4pcs",
        description: "the safest. 2x softer",
        price: 41.5,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 3,
        name: "pampers 6pcs",
        description: "the safest. 2x softer",
        price: 112.54,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 4,
        name: "pampers 8pcs",
        description: "the safest. 2x softer",
        price: 1.54,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 5,
        name: "pampers 10pcs",
        description: "the safest. 2x softer",
        price: 12.04,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 6,
        name: "pampers 12pcs",
        description: "the safest. 2x softer",
        price: 8.23,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 7,
        name: "pampers 14pcs",
        description: "the safest. 2x softer",
        price: 1.54,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 8,
        name: "pampers 16pcs",
        description: "the safest. 2x softer",
        price: 9.54,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 9,
        name: "pampers 18pcs",
        description: "the safest. 2x softer",
        price: 3.24,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
    {
        id: 10,
        name: "pampers 20pcs",
        description: "the safest. 2x softer",
        price: 3.24,
        image:
            "https://i5.walmartimages.com/asr/42a7ef85-28e9-4558-80b7-37b861655590.4357e6e7e5735988499e8fe415f0a8cf.png" +
            "?odnWidth=612&odnHeight=612&odnBg=ffffff",
        images: [],
    },
];

api.get("/api/product/list", (req, res) => {
    const body = products;
    res.json(body);
});

api.get("/api/product/:id", (req, res) => {
    const { id } = req.params;
    const idNum = parseInt(id, 10);
    const found = products.find((product) => product.id === idNum);
    if (!found) {
        throw new Error(`Product with id ${id} not found!`);
    }
    res.json(found);
});

module.exports = api;
