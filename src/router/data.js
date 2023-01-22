const { Router } = require("express");

const router = Router();

const userData = [
  {
    name: "taha",
    email: "taha@gmail.com",
  },
  {
    name: "bilal",
    email: "bilal@gmail.com",
  },
];
router.get("", (req, resporance) => {
  resporance.send(userData);
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  const userDetail = userData.find((g) => g.name === name);
  res.send(userDetail);
});

router.post("", (req, res) => {
  console.log(req.body);
  userData.push(req.body);
  res.send(201);
});

module.exports = router;
