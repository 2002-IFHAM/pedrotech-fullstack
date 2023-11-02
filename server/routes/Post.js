const express = require("express");
const router = express.Router();
const { posts } = require("../models");

router.get("/", async (req, res) => {
  const listofposts = await posts.findAll();
  res.json(listofposts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  // this will send data to the server or we can say save data to database(we will have a frontend from to take these details as input)

  const post = req.body; //grabbing post data from the body we will be sending through html form
  await posts.create(post); // inserts data in mysql workbench
  res.json(post);
});

module.exports = router;
