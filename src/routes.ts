import type express from 'express';
import { clearCollection, mergeData, testConnection } from './mongo.db';
import { fetchAPIStatus, fetchCategories } from './fetch';

/**
 * /DBHealth
 * /APIHealth
 * /clearCollections
 * /items
 * /categories
 */
export default function loadRoutes(app: express.Express) {
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

  app.get('/APIHealth', async (_req, res) => {
    try {
      const status = await fetchAPIStatus();
      console.log('\nAPI Status ok ');
      res.status(200).send(status);
    } catch (error) {
      console.log('\nAPI Error: ', error);
      res.status(502).send({ error: 'Upstream API error', details: error });
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

  app.get('/categories', async (_req, res) => {
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
