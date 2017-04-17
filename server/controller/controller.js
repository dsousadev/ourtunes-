const db = require('../db/index.js');

module.exports = {
  get: function(req, res){
    db.Song.findAll()
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      if(err) {
        console.log(err);
      }
    })
  },
  post: function(req, res){
    db.Song.findOrCreate({where: {title: req.body.title, artist: req.body.artist} })
      .then(function(result){
          console.log('CREATED!');
          res.json(result);
        })
      .catch(function(err){
        console.log('Error ', err);
        res.sendStatus(404);
      })
    }
};
