const express = require('express');
const app = express();
const path = require("node:path");
const indexRouter = require('./routes/index')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));
const publicPath  = path.join(__dirname, "public");
app.use(express.static(publicPath ))

app.use('/',indexRouter)
app.use((req,res)=>{
    res.status(404).send('Error')
})

app.listen(3000)