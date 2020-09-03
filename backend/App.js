const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// connect to database
const uri = process.env.URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB!');
});

//Routing 
const donationsRouter = require('./routes/donations');
const requestsRouter = require('./routes/requests');

app.use('/donate', donationsRouter);
app.use('/request', requestsRouter);

//Listen
app.listen(port, () => {
    console.log('Server is running on port: '+port);
});