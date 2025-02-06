"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  function checkInput(input) {
    return !input || input.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  };

  //server-side input validation
  if (
    checkInput(meal.title) ||
    checkInput(meal.summary) ||
    checkInput(meal.instructions) ||
    checkInput(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }

  await saveMeal(meal);

  revalidatePath("/meals");

  redirect("/meals");
}
