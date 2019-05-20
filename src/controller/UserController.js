const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {

    // store an user
    async store(req, res){ 
        const user = await User.create(req.body);
        return res.json(user);
    },

    // show all users
    async index(req,res){
        const users = await User.find();
        return res.json(users);
    },

    // delete an user
    async delete(req,res){
       await Users.findByIdAndRemove(req.params.id);
        return res.send();
    },

    // show one user
    async show(req,res){
        const user = await User.findById(req.params.id);

        return res.json(user);

    
    },

    // update an user
    async update(req,res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:  true});

        return res.json(user);
    }
}