import sql from "better-sqlite3";

const db = sql("meals.db"); //veritabani baglantisi

//run veri ekleme, veri degistirmede
//all veri getirmede
//bir satir veri cekilecekse ise get

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("Loading meals failed!");
  return db.prepare("SELECT * FROM meals").all();
}
