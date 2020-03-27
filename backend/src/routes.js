const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

//rota pra mostrar um nome na home
routes .get('/', (req, res) => {
    return res.send(`A culpa é do seu ${req.query.name}`);
}  );
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

/* routes.post('/devs', (req,res) => {    
    //pra mostrar e retornar o conteúdo armazenado
    /*console.log(req.body);
    return res.json({
        ok : true 
    })
});*/

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;