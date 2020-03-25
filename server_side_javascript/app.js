const express = require('express')
const app = express();

app.set('view engine', 'jade')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.locals.pretty = true;
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/route', (req, res)=>{
    res.send('Hello Router, <img src="/route.png"></img>')
})
app.get('/login', (req, res) => {
    res.send('Login please')
})

app.get('/dynamic', (req, res) =>{
    var lis = ''
    for(var i = 0; i<5; i++){
        lis += '<li>coding</li>'
    }
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>Hello Dynamic</h1>
            ${lis}
        </body>
    </html>`)
})

app.get('/template', (req, res)=>{
    res.render('temp', {time:new Date()})
})

//semantic url
app.get('/topic/:id', (req, res)=>{
    var topics = [
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ]
    var str = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    `

    var output = str + topics[req.params.id]
    res.send(output);
})

//post방식
app.get('/form', (req, res)=>{
    res.render('form')
})

app.post('/form_receiver', (req, res)=>{
    var title = req.body.title
    var description = req.body.description;
    res.send(title+description)
})
app.listen(port, () =>{console.log(`Example app listening on port ${port}!`)})