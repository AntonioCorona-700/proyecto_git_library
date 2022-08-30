const express = require ('express');
const app=express();
const path=require('path');
//settings
app.set('port',3000)
//middelware
app.use(express.static(path.join(__dirname,'public')))
//routes
app.get('/',(req,res)=>{
    res.send('Bienvenidos')
})

app.listen(app.get('port'), ()=>{
    console.log(`Hola mundo en el puerto ${app.get('port')}`)
});