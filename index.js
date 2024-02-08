const express=require('express');

const app=express();

const myDB=require('./config/db.js');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const route=require('./router/router.js');

app.use(route);


app.listen(3002,()=>{
    console.log('Server is running on port 3002');
});

