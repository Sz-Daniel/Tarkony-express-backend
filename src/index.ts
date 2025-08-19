import express from 'express';
import cors from 'cors';
import { loadRoutes } from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

loadRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
