"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
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
    checkInput(title) ||
    checkInput(summary) ||
    checkInput(instructions) ||
    checkInput(creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    throw new Error("Invalid input");
  }

  await saveMeal(meal);

  redirect("/meals");
}
