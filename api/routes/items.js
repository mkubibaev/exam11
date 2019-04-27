const express = require('express');

const Item = require('../models/Item');

const router = express.Router();

router.get('/', async (req, res) => {
    let category = null;

    if (req.query.category) category = {category: req.query.category};

    try {
        const items = await Item
            .find(category)
            .sort({published_at: -1})
            .select(['title', 'image', 'price']);

        return res.send(items);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item
            .findById(req.params.id)
            .populate('user', ['fullname', 'phone'])
            .populate('category', 'title');

        return res.send(item)
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
