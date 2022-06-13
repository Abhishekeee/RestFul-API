const express = require("express");
const router = require('./routers/men');
require('./db/conn');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
    res.send("Hello from the Abhishek");
})

app.listen(port, () => console.log(`Connection Successful to Port ${port}`));
