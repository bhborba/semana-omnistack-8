const axios = require('axios');
const Dev = require('../models/dev'); 

module.exports = {
    async index(req, res){
        const { user } = req.headers;
       
        const loggedDev = await Dev.findById(user);
        
        try {
            const users = await  Dev.find({
                $and: [
                    { _id: { $ne: user } },
                    { _id: { $nin: loggedDev.likes } },
                    { _id: { $nin: loggedDev.dislikes } }
                ],
            })
            return res.json(users);
        } catch (error) {
            //se não houher nenhum usuário logado (sem header)
            return res.json({
                "error": "Usuário não logado" 
            })
        }
        
    }, 
    
    async store (req, res) {
        
        const { username } = req.body;
        
        const userExists = await Dev.findOne({ user: username });

        if (userExists){
            return (res.json(userExists));
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const {name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user : username,
            bio,
            avatar
        })

        //console.log(response.data);

        return res.json(dev);
    }
};