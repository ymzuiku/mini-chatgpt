// express, ORM(Prisma+SQLite) //Mysql, PostgreSQL
import { app } from "./app.js";
import "./controllers/index.js";

const port = 3001;

app.listen(port, () => {
  console.log("listening: http://0.0.0.0:" + port);
});
