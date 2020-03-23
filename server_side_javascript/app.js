const express = require('express')
const app = express();

app.set('view engine', 'jade')
app.set('views', './views')
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
    res.render('temp')
})

app.listen(port, () =>{console.log(`Example app listening on port ${port}!`)})