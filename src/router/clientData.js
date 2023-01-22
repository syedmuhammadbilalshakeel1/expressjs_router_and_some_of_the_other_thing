const { Router } = require("express");

const router = Router();

const clientData = [
  {
    name: "umer",
    working: "front-end devloper",
  },
  {
    name: "zeeshan",
    working: "backed-end devloper",
  },
  {
    name: "Atta",
    working: "lblock chain devloper",
  },
  {
    name: "ahmed",
    working: "web 3.0 devloper",
  },
];

router.get("", (req, res) => {
  res.send(clientData);
});

module.exports = router;
