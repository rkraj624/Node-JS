const express = require('express')
const app = express();

//middleWare
const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send(`Please provide your age`)
    }else if(req.query.age < 18){
        res.send(`You are under aged`)
    }else{
        next();
    }
}

app.use(reqFilter);

app.get('/', (req,res) =>{
    res.send(`Welcome to Home Page`)
})

app.get('/user', (req, res)=>{
    res.send(`Welcome to user page`)
})
app.get('/about', (req, res)=>{
    res.send(`Welcome to about page`)
})
app.listen(5000);