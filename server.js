const express = require("express"); //import express
const MONGODB_URI = "mongodb+srv://25mca18_db_user:rnNBuhJKZu8jVA6Y@cluster0.aaurgto.mongodb.net/?appName=Cluster0"
const mongoose = require('mongoose');
const dns = require('dns');
const app = express();  //function call() : [express()]
const {createtask, getTasks, deleteTask} = require('./controllers/taskcontroller');
const cors = require('cors');

dns.setServers(["8.8.8.8","8.8.4.4"]);

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("Mongo connected successfully")
}).catch((err)=>{
    console.log("Mongo connection failed!",err)
})

app.use(express.json());
app.use(cors());
app.post('/create',createtask);
app.get('/fetch',getTasks);
app.delete('/delete/:id',deleteTask);

app.listen(4000 ,() =>{
    console.log("server running on port:4000");
});  
 