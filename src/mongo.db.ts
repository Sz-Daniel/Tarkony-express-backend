import { fetchItemsData, fetchItemsPrice } from "./fetch";
import { itemDataQuery } from "./queries";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://szabo93dani_db_user:P7ch1rySaWi7nsVt@cluster0.fva9gn7.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const testConnection = async () => {
  try {
    await client.connect();
    await client.db("tarkony_express").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const collections = await client.db("tarkony_express").listCollections();
    console.log("Collections in tarkony_express database:");
    await collections.forEach((collection: any) =>
      console.log(` - ${collection.name}`)
    );
  } catch (error) {
    throw error;
  }
};
testConnection();

async function getCollection(collectionName: string) {
  try {
    await client.connect();
    return await client.db("tarkony_express").collection(collectionName);
  } catch (error) {
    throw error;
  }
}
export async function clearCollection(collectionName: string) {
  try {
    const collection = await getCollection(collectionName);
    const result = await collection.deleteMany({});
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

/*
db func 
collection list
clear X collection 

Cél:

3rd lekérni adat, árak
feltölteni adat, árak
lekérni adat , árak
összefűzni adat + árak

*/

export async function getCategories() {
  return await getMore("categories");
}
export async function getMore(collectionName: string, sort = {} as object) {
  try {
    const collection = await getCollection(collectionName);
    const result = await collection.find({}).sort(sort).toArray();
    return result;
  } catch (error) {
    console.error(`Error in getMore for collection ${collectionName}:`, error);
    throw error;
  }
}

export async function getItemsPriceAll() {
  return await getMore("items_price");
}
export async function getItemsDataAll() {
  return await getMore("items_data");
}

export async function mergeData() {
  const itemsData = await getItemsDataAll();
  const itemsPrice = await getItemsPriceAll();
  const merge = itemsData.map((item) => {
    const found = itemsPrice.find((findItem) => {
      return item.id === findItem.id;
    });
    return { ...item, ...found };
  });
  return merge;
}

export async function updatePrice(newData: Array<object>) {
  try {
    const timemstamp_db = new Date();
    const collection = await getCollection("items_price");
    const updatedData = newData.map((item) => ({ ...item, timemstamp_db }));
    const result = await collection.insertMany(updatedData);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(newData: Array<object>) {
  try {
    const collection = await getCollection("items_data");
    const result = await collection.updateMany({ $set: newData });
    return result;
  } catch (error) {
    console.log(error);
  }
}
