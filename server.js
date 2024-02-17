import app from './server/express.js';
import mongoose from 'mongoose';
import config from './config.js';

//require('dotenv').config()

//const mongoose = require('mongoose')


mongoose.connect(config.mongoUri, { useNewUrlParser: true})

const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('Connected to database'))


app.listen(3000, () => console.log('{"message":"Welcome to Describe Application"}'))
