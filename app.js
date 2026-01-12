const express = require('express')
const app = express();
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
const queries = require('./controllers/manageQuesties')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',queries.getUsernames)

app.get('/new',queries.createUsernameGet)

app.post('/new',queries.createUsernamePost)

app.get('/delete',queries.deleteUsers)


app.listen(3000)