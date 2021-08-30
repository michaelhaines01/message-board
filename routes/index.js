var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message-board", messages });
});

//GET form

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const newmessage = {
    text: req.body.messagetext,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(newmessage);
  res.redirect("/");
});

module.exports = router;
