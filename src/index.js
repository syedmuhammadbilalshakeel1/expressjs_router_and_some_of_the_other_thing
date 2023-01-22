const express = require("express");
const userRoutes = require("./router/data");
const clientRoute = require("./router/clientData");

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use("/api/data", userRoutes);

app.use("/api/client", clientRoute);

app.listen(PORT, () =>
  console.log(`Running express server at thie port ${PORT}`)
);
