const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {

    db.Book.create(req.body, function (err, small) {
      console.log(err)
      console.log(small)
    });
    console.log(db.Book.find(req.query))
  },
  remove: function (req, res) {
    console.log(req.params.id)
    db.Book.findOneAndDelete( {id: req.params.id}, (err, stuff) =>{
      console.log(err)
      console.log(stuff)
    })
      .then(console.log('deleted'))
  },
};
