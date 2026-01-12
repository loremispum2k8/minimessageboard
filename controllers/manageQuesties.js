const db = require('../db/queries')

async function getUsernames(req,res){
    if(req.query.search == ''){
        return res.redirect('/')
    }
    else if(req.query.search){
        const usernames = await db.searchUsers(req.query.search)
        return res.render('index',{usernames:usernames})
    }
    const usernames = await db.getAllUsers()
    res.render('index',{usernames:usernames})
}

async function createUsernameGet(req,res){
    res.render('form')
}

async function createUsernamePost(req,res){
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function deleteUsers(req,res){
    await db.deleteAllUsers()
    res.redirect("/");
}

module.exports={
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteUsers
}

