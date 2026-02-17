import express from 'express';

import cors from 'cors';
import config from './config.js';
import { mongoRoutes } from './routes.js';

const port = Number(config.port);
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ status: 'ok' }));

mongoRoutes(app);

app.listen(port, () => {
  console.log(`Tarkony Express Backend is running at http://localhost:${port}`);
  // startCronJobs();
});
