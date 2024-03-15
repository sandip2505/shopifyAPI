
        const mongoose = require('mongoose');
        require('dotenv').config()
        mongoose.set("strictQuery", false);

        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch((err) => {
            console.log(err);
        });

        module.exports = mongoose;

  