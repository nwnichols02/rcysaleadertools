const express = require("express");
const router = express.Router();
const NewMember = require('../models/new-members-model');
const db = require("../database/db-config");

/* GET new members listing. */

router.get('/', (req, res, next) => {
  NewMember.getAllNewMembers()
    .then((newMembers) => {
      res.status(200).json(newMembers)
    })
    .catch(next)
})


/* GET new member listing by ID. */

router.get("/:id", (req, res, next) => {
  NewMember.getNewMemberById(req.params.id)
    .then((newMembers) => {
      if (newMembers) {
        res.status(200).json(newMembers);
      } else {
        res
          .status(404)
          .json({ message: "failed to get newMembers, it may not exist" });
        }
    })
    .catch(next);
  });
  
  /* POST new NewMember listing. */
  
  router.post("/", (req, res, next) => {
    NewMember.addNewMember(req.body)
    .then((newNewMember) => {
      res.status(201).json(newNewMember);
    })
    .catch(next);
  });
  
  /* UPDATE existing NewMembers listing. */
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const editedNewMembers = await db("new_members")
      .where("new_member_id", id)
      .update(req.body);
      if (editedNewMembers) {
      res.status(200).json({ message: 'successful update!' });
    } else {
      res.status(404).json({ message: "record not found" });
    }
  } catch (err) {
    next(err);
  }
});

/* DELETE newMembers listing. */

router.delete("/:id", (req, res, next) => {
  NewMember.deleteNewMember(req.params.id)
    .then((count) => {
      res.status(204).json({message: 'successful deletion'}).end()
    })
    .catch((next) => {
      res.status(404).json({ message: "Record not found" });
    });
});

module.exports = router;