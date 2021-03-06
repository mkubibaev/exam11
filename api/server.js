const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./routes/users');
const categories = require('./routes/categories');
const items = require('./routes/items');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {
    app.use('/users', users);
    app.use('/categories', categories);
    app.use('/items', items);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
