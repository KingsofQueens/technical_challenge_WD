const express = require('express');
const Phone = require('../models/phone');
const phoneRouter = express.Router();

phoneRouter.get('/', (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.json({ phones });
      //   console.log(phones);
    })
    .catch((err) => next(err));
});

phoneRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Phone.findById(id)
    .then((phone) => {
      res.json({ phone });
    })
    .catch((err) => next(err));
});

module.exports = phoneRouter;
