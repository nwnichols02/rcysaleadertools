const express = require("express");
const router = express.Router();
const Agenda = require('../models/agendas-model');
const db = require("../database/db-config");

/* GET agendas listing. */

router.get('/', (req, res, next) => {
  Agenda.getAllAgendas()
    .then((agendas) => {
      res.status(200).json(agendas)
    })
    .catch(next)
})


/* GET agenda listing by ID. */

router.get("/:id", (req, res, next) => {
  Agenda.getAgendaById(req.params.id)
    .then((agendas) => {
      if (agendas) {
        res.status(200).json(agendas);
      } else {
        res
          .status(404)
          .json({ message: "failed to get agendas, it may not exist" });
        }
    })
    .catch(next);
  });
  
  /* POST new agendas listing. */
  
  router.post("/", (req, res, next) => {
    Agenda.addAgenda(req.body)
    .then((newAgenda) => {
      res.status(201).json(newAgenda);
    })
    .catch(next);
  });
  
  /* UPDATE existing agendas listing. */
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const editedAgendas = await db("agendas")
      .where("agenda_id", id)
      .update(req.body);
      if (editedAgendas) {
      res.status(200).json({ message: 'successful update!' });
    } else {
      res.status(404).json({ message: "record not found" });
    }
  } catch (err) {
    next(err);
  }
});

/* DELETE agendas listing. */

router.delete("/:id", (req, res, next) => {
  Agenda.deleteAgenda(req.params.id)
    .then((count) => {
      res.status(204).json({message: 'successful deletion'}).end()
    })
    .catch((next) => {
      res.status(404).json({ message: "Record not found" });
    });
});

module.exports = router;