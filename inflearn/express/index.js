const express = require('express')
const morgan = require('morgan')
const app = express();

var users = [
    {id:1, name:'alice'},
    {id:2, name:'bek'},
    {id:3, name:'cris'},
]


// function commonmw(req, res, next){
//     console.log('commonmw')
//     next(new Error('error ouccered'));
// }

// function errormw(err, req, res, next){
//     console.log(err.message);
//     //에러를 처리 하거나 다음 미들웨어에 에러를 넘겨줌
//     next();
// }

// app.use(commonmw);
// app.use(errormw);
// function logger(req, res, next){
//     console.log('i am logger')
//     next();
// }

// function logger2(req, res, next){
//     console.log('i am logger2')
//     next();
// }

// app.use(logger);
// app.use(logger2);
// app.use(morgan('dev'))

app.use(morgan('dev'))

app.get('/users', function(req, res){
    res.json(users);
})
app.post('users', function(req, res){
    //create user....
})

app.listen(3000, function(){
    console.log('server is running')
})