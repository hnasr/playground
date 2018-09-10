const app = require("express")();

app.get("/home", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/", (req, res) => res.send("Hey, GET received." + req.query.q));
app.post("/", (req, res) => res.send("Hey, POST received."));
app.get("/:user", (req, res) => res.send("Hello!" + req.params.user));
app.listen(8080, () => console.log("Listening on port 8080"));

