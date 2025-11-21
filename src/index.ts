import express from "express";
import { startCronJobs } from "./cron";

const app = express();
app.use(express.json());
const port = process.env.PORT ?? "9001";

require("./routes")(app);
app.listen(port, () => {
  console.log(`Tarkony Express Backend is running at http://localhost:${port}`);
  //startCronJobs();
});
