const express = require('express');

const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');
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

        return res.send(item);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
    const itemData = req.body;
    itemData.user = req.user._id;

    if (req.file) {
        itemData.image = req.file.filename;
    }

    try {
        const item = new Item(itemData);

        await item.save();
        return res.send({message: 'Item added!', item});
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        console.log(item);
        if (item.user.equals(req.user._id)) {
            await item.remove()

            return res.status(200).send({message: 'Item deleted!'});
        } else {
            return res.status(403).send({message: 'Access forbidden!'});
        }
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;
