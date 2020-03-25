const express = require('express')
const fs = require('fs')
const app = express()

app.locals.pretty = true;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', './views')
app.set('view engine', 'jade')

app.get('/', (req, res)=>{
    fs.readdir('data', (err, files)=>{
        if(err){
            console.log(err)
            res.status(500).send('Internal Server Error')
        }
        res.render('new', {
            topics:files
        })
    })
})

app.post('/topic', (req, res)=>{
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('./data/'+title, description, (err)=>{
        if(err){
            res.status(500).send('Internal Server Error')
        }
        res.redirect('/topic/'+title)
    })
})

app.get(['/topic','/topic/:name'], (req, res)=>{
    var name = req.params.name
    fs.readdir('data', (err, files)=>{
        if(err){
            console.log(err)
            res.status(500).send('Internal Server Error')
        }
        if(name != undefined){
            fs.readFile('data/'+name, 'utf8', (err, data)=>{
                if(err){
                    console.log(err)
                    res.status(500).send('Internal Server Error')
                }
                res.render('view', {
                    topics:files,
                    title:name,
                    description:data
                })
            })
        } else {
            res.render('view', {
                topics:files,
                title:'Welcome', 
                description:'Hello, JavaScript for server'
            })
        }
    })
})

app.listen(3000, () =>{
    console.log('Connected 3000 port')
})