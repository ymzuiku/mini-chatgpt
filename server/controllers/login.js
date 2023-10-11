import { app } from "../app.js";

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  res.send({
    ok: true,
    email,
  });
});
