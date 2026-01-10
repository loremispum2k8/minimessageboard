const express = require('express')
const indexRouter = express.Router()

const messages = [
  {
    text: "First time posting here. This place feels like it’s one CSS file away from greatness.",
    user: "Jonathan",
    added: `${new Date().getDate()}.${new Date().getMonth() > 9 ? new Date().getMonth()+1: 0+String(new Date().getMonth()+1)}.${new Date().getFullYear()}`,
    msgId:crypto.randomUUID()
  },
  {
    text: "Coffee finished. Motivation pending.",
    user: "MikeyLikey",
    added: `${new Date().getDate()}.${new Date().getMonth() > 9 ? new Date().getMonth()+1: 0+String(new Date().getMonth()+1)}.${new Date().getFullYear()}`,
    msgId:crypto.randomUUID()
  }
];



indexRouter.get('/',(req,res)=>{
    res.render('index',{title:'Home',header:'All messages',info:messages})
})
indexRouter.get('/new',(req,res)=>{
    res.render('newMessages',{title:'New messages',header:'Add messages'})
})
indexRouter.get('/:id',(req,res)=>{
    const msg = messages.find(msgId => msgId.msgId == req.params.id)
    console.log(msg)
    res.render('message',{title:'message',info:msg})
})
indexRouter.post('/new',(req,res)=>{
    messages.push({
      text: req.body.message,
      user: req.body.user,
      added: `${new Date().getDate()}.${new Date().getMonth() > 9 ? new Date().getMonth()+1: 0+String(new Date().getMonth()+1)}.${new Date().getFullYear()}`,
      msgId:crypto.randomUUID()
    })
    console.log(crypto.randomUUID())
    res.redirect('/new')
})



module.exports = indexRouter