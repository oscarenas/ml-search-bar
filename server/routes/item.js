const express = require("express");
const axios = require("axios");
const requestData = require("../requestService");

let route = new express.Router();

route.get("/items", (req, res) => {
  // const searchItem = req.query.q || "World"; // 🔥 VALIDATION MISSING  ----- PENDING
  // console.log("search: ", req.query.q);
  requestData.searchItems(req.query.q).then((data) => {
    res.send({ search: data });
  });
});

route.get("/items/:id", (req, res) => {
  // const searchId = req.params.id || "World"; // 🔥 VALIDATION MISSING ----- PENDING
  console.log("ItemId: ", req.params.id);
  requestData.getItemById(req.params.id).then((data) => {
    res.send({ item: data });
  });
});

route.get("/items/:id/description", (req, res) => {
  // const searchId = req.params.id || "World"; // 🔥 VALIDATION MISSING ----- PENDING
  // console.log("search ID: ", req.params.id);
  requestData.getItemDescription(req.params.id).then((data) => {
    res.send({ description: data });
  });
});

module.exports = route;
