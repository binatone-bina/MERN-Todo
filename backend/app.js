const express = require("express");
const app = express();

const cors = require('cors')

require("./conn/conn.js");

const auth = require('./routes/auth.js');
const list = require('./routes/list.js');


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use('/api/v1', auth);
app.use('/api/v2', list);

app.listen(1000, () => {
    console.log("Server started on port 1000");
});
