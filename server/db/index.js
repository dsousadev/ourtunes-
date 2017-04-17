const Sequelize = require('sequelize');
const connection = new Sequelize('mytunes', 'root', '');

const Song = connection.define('song', {
    title: Sequelize.STRING,
    artist: Sequelize.STRING,
    url: Sequelize.STRING,
  },
  {
    timestamps: false
  });

Song.sync();

exports.Song = Song;