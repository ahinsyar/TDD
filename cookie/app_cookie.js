const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser('asdf4hdghcbvxcfv'))

//쿠키로 count
app.get('/', (req, res)=>{
    var count = parseInt(req.signedCookies.count)
    if(!req.signedCookies.count){
        count = 0
    }
    count += 1
    console.log(count)
    res.cookie('count', count, {signed:true})
    res.send('count : '+count)
})

//쇼핑 카트
var products = {
    1:{title:'The history of web 1'},
    2:{title:'The next web'}
}

app.get('/products', (req, res)=>{
    var output = ''

    for(var name in products){
        output += `
        <li>
            <a href="/cart/${name}"> ${products[name].title}</li>`
    }
    res.send(`
    <h1> Products </h1>
    <ul>
        ${output}
    </ul>
    <a href="/cart">Cart</a>
    `)
})

app.get('/cart/:id', (req, res)=>{
    var id = req.params.id
    if(req.signedCookies.cart){
        var cart = req.signedCookies.cart
    } else{
        var cart = {};
    }
    if(!cart[id]){
        cart[id] = 0
    }
    cart[id] = parseInt(cart[id])+1
    

    res.cookie('cart', cart, {signed:true})
    res.redirect('/cart')
})

app.get('/cart', (req, res)=>{
    var cart = req.signedCookies.cart
    if(!cart){
        res.send('Empty')
    } else {
        var output = ''
        for(var id in cart){
            output += `
            <li>${products[id].title}(${cart[id]})</li>
            `
        }
    }

    res.send(`
    <h1>Cart</h1>
    <ul>${output}</ul>
    <a href="/products">Products List </a>
    `)
})

app.listen(3000, ()=>{
    console.log('Connected 3000 port')
})