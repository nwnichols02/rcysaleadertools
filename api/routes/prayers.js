const express = require("express");
const router = express.Router();
const Prayer = require("../models/prayers-model");
const db = require("../database/db-config");

/* GET prayers listing. */

router.get("/", (req, res, next) => {
  Prayer.getAllPrayers()
  .then((prayers) => {
    res.status(200).json(prayers);
    })
    .catch(next);
});

/* GET prayers listing by ID. */

router.get("/:id", (req, res, next) => {
  Prayer.getPrayerById(req.params.id)
    .then((prayers) => {
      if (prayers) {
        res.status(200).json(prayers);
      } else {
        res
          .status(404)
          .json({ message: "failed to get prayers, it may not exist" });
        }
    })
    .catch(next);
  });
  
  /* POST new prayers listing. */
  
  router.post("/", (req, res, next) => {
    Prayer.addPrayer(req.body)
    .then((newPrayer) => {
      res.status(201).json(newPrayer);
    })
    .catch(next);
  });
  
  /* UPDATE existing prayers listing. */
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const editedPrayers = await db("prayers")
      .where("prayer_id", id)
      .update(req.body);
      if (editedPrayers) {
      res.status(200).json({ message: 'successful update!' });
    } else {
      res.status(404).json({ message: "record not found" });
    }
  } catch (err) {
    next(err);
  }
});

/* DELETE prayers listing. */

router.delete("/:id", (req, res, next) => {
  Prayer.deletePrayer(req.params.id)
    .then((count) => {
      res.status(204).json({message: 'successful deletion'}).end()
    })
    .catch((next) => {
      res.status(404).json({ message: "Record not found" });
    });
});

module.exports = router;
