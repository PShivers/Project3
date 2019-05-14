const express = require("express");
const app = express();
const routes = require("./routes/index.js");

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use(require("./routes"));
//huh?
app.use("/api/v1", routes);
//huh??
app.use(express.static(`${__dirname}/client/build`));

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/*", (req, res) => {
//   res.sendFile(`${__dirname}/client/build/index.html`);
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("App is up and running on port " + PORT);
});
