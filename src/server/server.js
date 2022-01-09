const path = require('path')
const express = require("express");

const connectDB = require('./config/db');
const { notFound, errorHandler } = require("./middlewares/errorMiddlleware");
const userRoutes = require('./routes/userRouts');
const formRoutes = require('./routes/formRouts');
const contactRoutes = require('./routes/contactRouts');
const noteRoutes = require('./routes/notesRoutes');
const { Router } = require('express');

const env = require('dotenv').config({ path: '../../.env' });

const app = express();

connectDB();
app.use(express.json());
//app.get('/',(req,res)=>{
//  res.send("Api is runing")
//})
//need to do routing and rendering with express the page of the thing we need 

//app.get('/fetch',notesController)

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/forms', formRoutes)
app.use('/api/contacts', contactRoutes);

app.use(express.static(path.join(__dirname, '../', '../', 'build',)));
// Router(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'))
})


app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started port ${PORT}`));