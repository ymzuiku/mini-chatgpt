import { app } from "../app.js";

app.get("/api/ping", (req, res) => {
  res.send("pong");
});
