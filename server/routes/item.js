const express = require("express");
const axios = require("axios");
const requestData = require("../requestService");

let route = new express.Router();

route.get("/items", (req, res) => {
  requestData.searchItems(req.query.q).then((data) => {
    res.send({ search: data });
  });
});

route.get("/items/:id", (req, res) => {
  requestData.getItemById(req.params.id).then((data) => {
    res.send({ item: data });
  });
});

route.get("/items/:id/description", (req, res) => {
  requestData.getItemDescription(req.params.id).then((data) => {
    res.send({ description: data });
  });
});

module.exports = route;
