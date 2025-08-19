import { Express } from 'express';
import { test } from '../services/api/graphQL.js';

export function loadRoutes(app: Express) {
  app.get('/', (req, res) => {
    res
      .status(200)
      .json({ message: 'Welcome to Tarkony Express Backend API!' });
  });
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });
  app.post('/', (req, res) => {
    res.send('Got a POST request');
  });
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
  });
  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
  });

  app.get('/data', async (req, res) => {
    try {
      const result = await test();
      if (result.success) {
        res.status(200).json(result.data);
      } else {
        res.status(500).json({ error: result.errors });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // ...add other routes here...
}
