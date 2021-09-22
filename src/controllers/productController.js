const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Product = require('../models/Product');
const authConfig = require('../config/auth.json');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, tags, typeProduct, description, imageProduct, value, owner } = req.body;

    try {
        if(await Product.findOne({ name })) return res.status(400).send({error: "Product already exists"});

        const produto = await Product.create(req.body);

        return res.send({ produto });
    } catch (err) {
        return res.status(400).send({error: "Cannot save that product"});
    }
});

router.post('/search', async (req, res) => {
    const { name } = req.body;
    try {
        if(!await Product.findOne({name})) return res.status(400).send({error: "Product searched is not registred"});

        const produto = await Product.findOne({ name });

        return res.send(produto);
    } catch (err) {
        return res.status(400).send({ error: "Unexpected error please try again"});
    }
});

module.exports = app => app.use('/products', router);