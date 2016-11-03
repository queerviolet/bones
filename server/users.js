'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const user = require('express').Router()

// Custom routes go here.

module.exports = user
user.get('/', function(req, res, next){
    User.findAll()
    .then(function(users){
        console.log("users for routes", users);
        res.json(users);
    })
    .catch(next);
})

user.post('/', function(req, res, next){
    User.create(req.body)
    .then(function(){
        res.status(201).send();
    })
    .catch(next);
})

user.put('/:userId', function(req, res, next){
    User.update(req.body,{where:{id:req.params.userId}})
    .then(function(user){
        if(!user){
            res.status(404).send();
        }else{
            res.status(200).send();
        }
    })
    .catch(next);
})

user.delete('/:userId', function(req, res, next){
    User.destroy({where:{id:req.params.userId}})
    .then(function(){
        res.status(204).send();
    })
    .catch(next)

})

// // Epilogue will automatically create standard RESTful routes
// const users = epilogue.resource({
//   model: db.model('users'),
//   endpoints: ['/users', '/users/:id']
// })

// users.use(middle);

// const {mustBeLoggedIn, selfOnly, forbidden, catcherr} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly('delete'));
// //users.list.auth(forbidden('cannot list users'))
// console.log("here", users.list.write.action);
// //users.list.write.action();
// users.read.auth(mustBeLoggedIn)