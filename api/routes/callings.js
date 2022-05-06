const express = require("express");
const router = express.Router();
const Calling = require('../models/callings-model');
const db = require("../database/db-config");

/* GET callings listing. */

router.get('/', (req, res, next) => {
  Calling.getAllCallings()
    .then((callings) => {
      res.status(200).json(callings)
    })
    .catch(next)
})


/* GET Calling listing by ID. */

router.get("/:id", (req, res, next) => {
  Calling.getCallingById(req.params.id)
    .then((callings) => {
      if (callings) {
        res.status(200).json(callings);
      } else {
        res
          .status(404)
          .json({ message: "failed to get callings, it may not exist" });
        }
    })
    .catch(next);
  });
  
  /* POST new callings listing. */
  
  router.post("/", (req, res, next) => {
    Calling.addCalling(req.body)
    .then((newCalling) => {
      res.status(201).json(newCalling);
    })
    .catch(next);
  });
  
  /* UPDATE existing callings listing. */
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const editedCallings = await db("callings")
      .where("calling_id", id)
      .update(req.body);
      if (editedCallings) {
      res.status(200).json({ message: 'successful update!' });
    } else {
      res.status(404).json({ message: "record not found" });
    }
  } catch (err) {
    next(err);
  }
});

/* DELETE callings listing. */

router.delete("/:id", (req, res, next) => {
  Calling.deleteCalling(req.params.id)
    .then((count) => {
      res.status(204).json({message: 'successful deletion'}).end()
    })
    .catch((next) => {
      res.status(404).json({ message: "Record not found" });
    });
});

module.exports = router;