const app = require('../../index')
const syncdb = require('./sync-db')

syncdb().then(_=>{
    console.log('Sync DB')
    app.listen(3000, function(){
        console.log('server is running')
    })
})


    