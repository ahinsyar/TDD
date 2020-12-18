const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const user = require('./api/user')
const app = express();

// var users = [
//     {id:1, name:'alice'},
//     {id:2, name:'bek'},
//     {id:3, name:'cris'},
// ]


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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/users', user)

// app.get('/users', function(req, res){
//     req.query.limit = req.query.limit || 10
//     const limit = parseInt(req.query.limit, 10)
//     if(Number.isNaN(limit)){
//         return res.status(400).end();
//     }
//     res.json(users.slice(0, limit));
// })
// app.get('/users/:id', function(req, res){
//     const id = parseInt(req.params.id, 10);
//     if(Number.isNaN(id)){
//         return res.status(400).end();
//     }
//     const user = users.filter((user) =>
//         user.id === id
//     )[0];
//     if(!user){
//         return res.status(404).end();
//     }
//     res.json(user);
// })
// app.delete('/users/:id', function(req, res) {
//     const id = parseInt(req.params.id, 10)
//     if(Number.isNaN(id)){
//         return res.status(400).end();
//     }
//     users = users.filter(user => user.id !== id);
//     res.status(204).end()
// })

// app.post('/users', function(req, res){
//     const name = req.body.name
//     if(!name){return res.status(400).end()}
//     const isConflict = users.filter(user => user.name === name).length
//     if(isConflict){ return res.status(409).end(); }
//     const id = Date.now();
//     const user = {id, name}
//     users.push(user)
//     res.status(201).json(user);
// })

// app.put('/users/:id', (req, res)=>{
//     const id = parseInt(req.params.id, 10);
//     if(Number.isNaN(id)){
//         return res.status(400).end()
//     }
//     const name = req.body.name;
//     if(!name){
//         return res.status(400).end()
//     }
//     const isConflict = users.filter(user => user.name === name).length
//     if(isConflict){
//         return res.status(409).end();
//     }

//     const user = users.filter(user=> user.id === id)[0];
//     if(!user){
//         return res.status(404).end();
//     }
//     user.name = name;
//     res.json(user);
// })

app.listen(3000, function(){
    console.log('server is running')
})

module.exports = app;