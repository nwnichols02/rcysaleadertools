const express = require("express");
const router = express.Router();
const Talk = require("../models/talks-model");
const db = require("../database/db-config");

/* GET Talks listing. */

router.get("/", (req, res, next) => {
  Talk.getAllTalks()
  .then((talks) => {
    res.status(200).json(talks);
    })
    .catch(next);
});

/* GET talks listing by ID. */

router.get("/:id", (req, res, next) => {
  Talk.getTalkById(req.params.id)
    .then((talks) => {
      if (talks) {
        res.status(200).json(talks);
      } else {
        res
          .status(404)
          .json({ message: "failed to get talks, it may not exist" });
        }
    })
    .catch(next);
  });
  
  /* POST new talks listing. */
  
  router.post("/", (req, res, next) => {
    Talk.addTalk(req.body)
    .then((newTalk) => {
      res.status(201).json(newTalk);
    })
    .catch(next);
  });
  
  /* UPDATE existing talks listing. */
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const editedTalks = await db("talks")
      .where("talk_id", id)
      .update(req.body);
      if (editedTalks) {
      res.status(200).json({ message: 'successful update!' });
    } else {
      res.status(404).json({ message: "record not found" });
    }
  } catch (err) {
    next(err);
  }
});

/* DELETE talks listing. */

router.delete("/:id", (req, res, next) => {
  Talk.deleteTalk(req.params.id)
    .then((count) => {
      res.status(204).json({message: 'successful deletion'}).end()
    })
    .catch((next) => {
      res.status(404).json({ message: "Record not found" });
    });
});

module.exports = router;