require('dotenv').config();

const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors')

app.use(cors());

// middlewares
app.use(express.json({ extended: false }));

// HOME
app.use("/", require("./routes/home"));
// route included
app.use("/payment", require("./routes/payment"));

app.use("/test", require("./routes/testing_backend"));

app.listen(port, () => console.log(`server started on port ${port}`));