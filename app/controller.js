const Note = require('../model/model');

exports.create = (req, res) => {
  if(!req.body) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  }

  const note = new Note({
      id: req.body.id, 
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email
  });

  note.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
      });
  });
};