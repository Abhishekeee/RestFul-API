const mongoose = require('mongoose');
const db = `olympics`;
const url = `mongodb://localhost:27017/${db}`;
mongoose.connect(url).then(() => {
    console.log("Connection to the Database Successful");
}).catch(() => {
    console.log("Connection to Database Unsuccessful")
})