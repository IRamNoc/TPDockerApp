const express = require('express');
const mongoose = require('mongoose');

const app =  express();
const port = 3000;

mongoose.connect("mongodb://database:27017/TPDocker", {
    useNewUrlParser:true,
    useUnifiedToopology:true
}).then(()=> {
    console.log('connected');
}).catch((err) => {
    console.log('error');
})


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use('/hello',(req,res,next) => {
    console.log('Hello Word');
})

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port} : http://localhost:${port}`);
});