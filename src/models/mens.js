const mongoose = require('mongoose');

// Creating a Schema

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: String,
        required: true,
        trim: true,
    },
    event: {
        type: String,
        default: "100m"
    }
})

// Creating a Collection
const MensRanking = new mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;