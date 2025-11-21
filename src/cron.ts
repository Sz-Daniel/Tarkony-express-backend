import { fetchItemsData, fetchItemsPrice } from "./fetch";
import { updateData, updatePrice } from "./mongo.db";

const cron = require("node-cron");

export function startCronJobs() {
  cron.schedule("*/5 * * * *", async () => {
    const result = await updatePriceCron();
    console.log("Cron job executed: updatePriceCron", result);
  });
  cron.schedule("* * * * */7", async () => {
    const result = await updateDataCron();
    console.log("Cron job executed: updateDataCron", result);
  });
}

export async function updatePriceCron() {
  try {
    const fetchedData = await fetchItemsPrice();
    const update = await updatePrice(fetchedData);
    return update;
  } catch (error) {
    console.log(error);
  }
}

export async function updateDataCron() {
  try {
    const fetchedData = await fetchItemsData();
    const update = await updateData(fetchedData);
    return update;
  } catch (error) {
    console.log(error);
  }
}
