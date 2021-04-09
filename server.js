const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/user.routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true});

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log('mongoDB connection established.');
});

app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});