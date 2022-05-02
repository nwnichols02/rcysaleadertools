const express = require("express");
const router = express.Router();
const Prayer = require("../models/prayers-model");

/* GET prayers listing. */

router.get("/", (req, res, next) => {
  Prayer.getAllPrayers()
    .then((prayers) => {
      res.status(200).json(prayers);
    })
    .catch(next);
});

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

router.post("/", (req, res, next) => {
  Prayer.addPrayer(req.body)
    .then((newPrayer) => {
      res.status(201).json(newPrayer);
    })
    .catch(next);
});

module.exports = router;
