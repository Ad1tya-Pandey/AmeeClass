const { request, response } = require("express");
const express = require("express");
const router = express();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", async (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    email: request.body.email,
    batchcode: request.body.batchcode,
    pnumber: request.body.pnumber,
    snumber: request.body.snumber
  })
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
