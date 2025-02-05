import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { redirect } from "next/dist/server/api-utils";

const db = sql("meals.db"); //veritabani baglantisi

//run veri ekleme, veri degistirmede
//all veri getirmede
//bir satir veri cekilecekse ise get

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error("Loading meals failed!");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  //async kullanirsan cagirirken await kullanman lazim
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  console.log(meal);
  meal.slug = slugify(meal.title, { lower: true }); //path olusturuluyor
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug) 
     VALUES(
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
     )`
  ).run(meal);
}
