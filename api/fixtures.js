const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Category = require('./models/Category');
const Item = require('./models/Item');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const users = await User.create(
        {username: 'user1', password: '123', fullname: 'Carmen Rodriguez', phone: '+996 111 222', token: 'qwerty'},
        {username: 'user2', password: '321', fullname: 'Herbert Perry', phone: '+7 456 456', token: 'asdfg'}
    );

    const categories = await Category.create(
        {title: 'Cars'},
        {title: 'Electronics'},
        {title: 'Sport'}
    );

    await Item.create(
        {
            user: users[1]._id,
            category: categories[0]._id,
            title: 'Honda Accord 2008',
            description: 'The updated Accord for the Japanese and European markets went on sale in mid-2008. It is also sold as the Accord Euro in the Australia and New Zealand markets, and as the Acura TSX in North America.',
            image: 'honda.jpg',
            price: 9000,
            published_at: '2019-04-27T07:13:37.098Z'
        },
        {
            user: users[0]._id,
            category: categories[1]._id,
            title: 'NW - 058 Dual Track Microphone',
            description: 'It is really good, fisrt looks really nice, I think its pretty good that the microphone is small, the price is absolutely fine, it sounds good just do not put your mouth too close.',
            image: 'micro.jpg',
            price: 80,
            published_at: '2019-04-27T07:13:40.098Z'
        }
    );

    await connection.close();
};

run().catch(error => {
    console.error('Something went wrong');
});
