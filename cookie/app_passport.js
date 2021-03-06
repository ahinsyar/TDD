const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const md5 = require('md5')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;

const app = express();
app.use(session({
    secret: 'asdf4hdghcbvxcfv',
    resave:false,
    saveUninitalized:true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/count', (req, res)=>{
    if(req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1
    }
    res.send('count'+req.session.count)
})

app.get('/temp', (req, res)=>{
    res.send('result'+req.session.count)
})

//세션을 이용한 로그인
app.get('/auth/login' ,(req, res)=>{
    var output = `
    <h1>Login</h1>
    <form action='/auth/login' method='post'>
        <p>
            <input type='text' name='username' placeholder='user ID'>
        </p>
        <p>
            <input type='password' name='password' placeholder='Password'>
        </p>
        <p>
            <input type='submit'>
        </p>
    </form>
    `
    res.send(output)
})

var user = {
    username:'ethan',
    password:'111',
    displayName:'Ethan'
}

passport.serializeUser((user, done)=>{
    console.log('serializeUSer', user);
    done(null, user.username)
})
passport.deserializeUser((id, done)=>{
    console.log('deserializeUser', id)
    if(user.username === id){
        return done(null, user);
    }
})

//passport 사용
passport.use(new localStrategy(
    {
        usernameField:'username',
        passwordField:'password'
    },
    (username, password, done)=>{
        var username = username
        var pass = password
        console.log('localStrategyUSer')
        if(username == user.username && pass == user.password){
            done(null, user);
        } else {
            done(null, false)
        }
    }
))
app.post('/auth/login', passport.authenticate('local', {
    successRedirect:'/welcome',
    falureRedirect:'/auth/login',
    failureFlash:false
}))

// app.post('/auth/login', (req, res)=>{
//     var user = {
//         id:'ethan',
//         password:md5('111'),
//         displayName:'Ethan'
//     }

//     var id = req.body.username
//     var pass = md5(req.body.password)
    
//     if(id == user.id && pass == user.password){
//         req.session.displayName = user.displayName
//         res.redirect('/welcome')
//     } else {
//         res.send('Who are you? <a href="/auth/login>Login</a>')
//     }
// })

app.get('/welcome', (req, res)=>{
    if(req.user && req.user.displayName){
        var name = req.user.displayName
        res.send(`
        <h1>Welcome, ${name}</h1>
        <a href='/auth/logout'>logout</a>
        `)
    }else {
        res.send(`
        <h1>Welcome, </h1>
        <a href='/auth/login'>login</a>
        `)
    }
})

app.get('/auth/logout', (req, res)=>{
    req.logout();
    res.redirect('/welcome')
})
app.listen(3000, ()=>{
    console.log('Connected 3000 port')
})