const express = require('express');
const connectDB = require('./config/connect');
const app = express();
const appRouter = require('./route/contact');
const Port = 4000;
const {AddUser, deleteUser} = require('./controllers/contact');

connectDB();
app.use(express.json());
app.use('/api/contact',appRouter);
app.use('/api/User',AddUser);
app.use('/api/trash',deleteUser);

app.listen(Port,err =>{
    err?console.log(err):console.log(`connected to port : ${Port}`)
})