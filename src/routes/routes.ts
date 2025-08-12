import { Express } from 'express';

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

  // ...add other routes here...
}
