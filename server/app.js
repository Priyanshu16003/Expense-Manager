const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true}));

const port = process.env.PORT || 5500

app.listen(port,()=>{
    console.log("Server Initiated");
});