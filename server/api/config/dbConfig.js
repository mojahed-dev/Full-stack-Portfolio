const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)

// connection object

const connection = mongoose.connection;

// verify connection
connection.on('eror', () => {
    console.log('Error connection to database');
})

// success scenario
connection.on('connected', ()=> {
    console.log('Connected to database');
})

module.exports = connection;