const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log('Wait, connecting to database');

    mongoose.connect(
        'mongodb+srv://root:PfNJ2GOUXQwcq0mV@cluster0.jgbwcrk.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log('MongoDB Atlas Connected')).catch((error) => console.log(error));
};

module.exports = connectDatabase;