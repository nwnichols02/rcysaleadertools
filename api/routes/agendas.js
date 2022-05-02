const express = require('express');
const router = express.Router();
const Agenda = require('../models/agendas-model');

/* GET Agendas listing. */
router.get('/', (req, res, next) => {
  Agenda.getAllAgendas()
    .then((agendas) => {
      res.status(200).json(agendas)
    })
    .catch(next)
})



module.exports = router;
