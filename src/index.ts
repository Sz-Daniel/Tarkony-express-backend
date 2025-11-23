import express from 'express';

import cors from 'cors';
import config from './config.js';
import { startCronJobs } from './cron';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ status: 'ok' }));

import loadRoutes from './routes';
loadRoutes(app);

const port = Number(config.port);
app.listen(port, () => {
  console.log(`Tarkony Express Backend is running at http://localhost:${port}`);
  // startCronJobs();
});
