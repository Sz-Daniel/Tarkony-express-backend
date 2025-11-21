import axios from "axios";
import {
  APIStatus,
  categoriesQuery,
  itemDataQuery,
  itemPriceQuery,
} from "./queries";
import { buildMemoryStorage, setupCache } from "axios-cache-interceptor";

//Config
const axiosTarkovDev = axios.create({
  baseURL: "https://api.tarkov.dev/graphql",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

setupCache(axiosTarkovDev, {
  location: "server",
  storage: buildMemoryStorage(),
  debug: ({ id, msg, data }) => {
    console.log(`[axios-cache] id=${id} msg=${msg}`, data);
  },
  ttl: 30 * 24 * 60 * 60 * 1000,
});
//API Status
export async function fetchAPIStatus() {
  const response = await axiosTarkovDev.post("", {
    query: APIStatus,
    cache: {
      ttl: 0,
    },
  });
  const data = JSON.stringify(response.data, null, 2);
  return data;
}

//categories
export async function fetchCategories() {
  try {
    const response = await axiosTarkovDev.post("", {
      query: categoriesQuery.query,
    });

    if (!response.data || !response.data.data) {
      throw new Error("Invalid response structure received from API.");
    }
    return response.data.data.itemCategories;
  } catch (error) {
    throw error;
  }
}
//Items fetch
export async function fetchItems(query: string) {
  try {
    const response = await axiosTarkovDev.post("", {
      query: itemDataQuery.query,
      cache: {
        ttl: 5 * 60 * 1000,
      },
    });
    if (!response.data || !response.data.data) {
      throw new Error("Invalid response structure received from API.");
    }
    return response.data.data.itemCategories;
  } catch (error) {
    throw error;
  }
}

export async function fetchItemsData() {
  return fetchItems(itemDataQuery.query);
}

export async function fetchItemsPrice() {
  return fetchItems(itemPriceQuery.query);
}
