const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// To Insert Data
router.post("/mens", async (req, res) => {
    try {
        const addMenRecord = new MensRanking(req.body);
        const data = await addMenRecord.save();
        res.status(201).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
})
// To Get All Data
router.get("/mens", async (req, res) => {
    try {
        const getMenRecords = await MensRanking.find().sort({ "ranking": 1 });
        res.status(200).send(getMenRecords);
    } catch (e) {
        res.status(400).send(e);
    }
})
// To get Individual Data
router.get("/mens/:ranking", async (req, res) => {
    try {
        const ranking = req.params.ranking;
        const getMenRecord = await MensRanking.find({ ranking });
        res.status(200).send(getMenRecord);
    } catch (e) {
        res.status(400).send(e);
    }
})
// To Update Data
router.patch("/mens/:ranking", async (req, res) => {
    try {
        const ranking = req.params.ranking;
        const updateMenRecord = await MensRanking.updateOne({ ranking }, req.body);
        res.send(updateMenRecord);
    } catch (e) {
        res.status(500).send(e);
    }
})
// To Delete Data
router.delete("/mens/:ranking", async (req, res) => {
    try {
        const ranking = req.params.ranking;
        const deleteMenRecord = await MensRanking.deleteOne({ ranking });
        res.send(deleteMenRecord);
    } catch (e) {
        res.status(500).send(e);
    }
})
// Exporting router to use it in our main file app.js
module.exports = router;