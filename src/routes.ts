import type express from 'express';
import { fetchCategories } from './fetch';
import { mongoCategories } from './mongo.db';

/**
 * /DBHealth
 * /APIHealth
 * /clearCollections
 * /items
 * /categories
 */
export function frontendRoutes(app: express.Express) {}
export function mongoRoutes(app: express.Express) {
  app.get('/mongo/get/Categories', async (_req, res) => {
    try {
      const result = await mongoCategories();
      if (!result || result.length === 0) {
        return res.status(204).send([]);
      }
      res.status(200).send(result.json());
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });

  app.get('/mongo/update/Categories', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(200).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });
}

export function originRoutes(app: express.Express) {
  app.get('/origin/Categories', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(204).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });
}
export function loadRoutes(app: express.Express) {
  app.get('/origin/Categories', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(204).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });

  app.get('/mongo/update/Categories', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(200).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });
}

/*
 
  app.get('/DBHealth', async (_req, res) => {
    try {
      const result = await testConnection();
      console.log('\nDatabase connection OK');
      res.status(200).send(result);
    } catch (error) {
      console.log('\nDatabase connection FAIL', error);
      res.status(500).send({ error: 'DB connection failed', details: error });
    }
  });

  app.get('/clearCollections', async (_req, res) => {
    try {
      const resultPrice = await clearCollection('items_price');
      const resultData = await clearCollection('items_data');
      console.log('Collections cleared successfully.');
      res.status(200).send({
        message: 'Collections cleared successfully.',
        resultPrice,
        resultData,
      });
    } catch (error) {
      console.error('Error clearing collections:', error);
      res
        .status(500)
        .send({ error: 'CLEAR COLLECTIONS FAILED', details: error });
    }
  });

  app.get('/items', async (_req, res) => {
    try {
      const data = await mergeData();
      res.status(200).send(data);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).send({ error: 'Failed to fetch items', details: error });
    }
  });

  //http://localhost:5128/api/Frontend/Categories
  app.get('/api/Frontend/Categories', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(200).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });

  //http://localhost:5128/api/Frontend/Categories
  app.get('/api/Frontend/ItemBase', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(200).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });

  //http://localhost:5128/api/Frontend/Categories
  app.get('/api/Frontend/ItemDetail', async (_req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(200).send([]);
      }
      res.status(200).send(result);
    } catch (error: any) {
      console.error('Error fetching categories:', error.message || error);
      res.status(500).send({
        message: 'Failed to retrieve categories due to a server error.',
        details: error.message || error,
      });
    }
  });
*/
