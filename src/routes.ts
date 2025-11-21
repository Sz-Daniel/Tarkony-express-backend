import type express from "express";
import { clearCollection, mergeData, testConnection } from "./mongo.db";
import { fetchAPIStatus, fetchCategories } from "./fetch";

module.exports = function (app: express.Express) {
  app.get("/", (req, res) => {
    res.send("Welcome to the Tarkony Express Backend!");
  });

  app.get("/DBHealth", async (req, res) => {
    try {
      const result = await testConnection();
      console.log("\nDatabase connection OK");
      res.send(result);
    } catch (error) {
      console.log("\nDatabase connection FAIL", error);
      res.send(error);
    }
  });

  app.get("/APIHealth", async (req, res) => {
    try {
      const status = await fetchAPIStatus();
      console.log("\nAPI Status ok ");
      res.send(status);
    } catch (error) {
      console.log("\nAPI Error: ", error);
      res.send(error);
    }
  });

  app.get("/clearCollections", async (req, res) => {
    try {
      const resultPrice = await clearCollection("items_price");
      const resultData = await clearCollection("items_data");
      console.log("Collections cleared successfully.");
      res.send(
        "Collections cleared successfully." +
          JSON.stringify({ resultPrice, resultData })
      );
    } catch (error) {
      console.error("Error clearing collections:", error);
      res.status(500).send("CLEAR COLLECTIONS FAILED");
    }
  });

  app.get("/items", async (req, res) => {
    try {
      const data = await mergeData();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/categories", async (req, res) => {
    try {
      const result = await fetchCategories();
      if (!result || result.length === 0) {
        return res.status(200).send([]);
      }
      res.status(200).send(result);
    } catch (error) {
      console.error("Error fetching categories:", error.message || error);
      res.status(500).send({
        message: "Failed to retrieve categories due to a server error.",
        details: error.message,
      });
    }
  });

 
};
