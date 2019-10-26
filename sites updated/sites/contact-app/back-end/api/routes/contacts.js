const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Contact = require("../models/contact");

//GET request for a list of contacts
router.get("/", (req, res, next) => {
  Contact.find()
    .exec()
    .then(docs => {
      console.log(docs);
      // if (docs.length >= 0) {
      res.status(200).json(docs);
      //  } else {
      //    res.status(404).json({
      //     message: "No entries found"
      //    });
      //  }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//GET request for a of contact
router.get("/:contactId", (req, res, next) => {
  const id = req.params.contactId;
  Contact.findById(id)
    .exec()
    .then(doc => {
      console.log("From Database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//POST request to add a contact to a list
router.post("/", (req, res, next) => {
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email
  });
  contact
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /contacts",
        createdContact: contact
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//PATCH request to update a contact
router.patch("/:contactId", (req, res, next) => {
  const id = req.params.contactId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Contact.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  res.status(200).json({ message: "Updated Contact" });
});
//DELETE request to delete a single contact
router.delete("/:contactId", (req, res, next) => {
  const id = req.params.contactId;
  Contact.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  res.status(200).json({ message: "Deleted Contact" });
});

module.exports = router;
