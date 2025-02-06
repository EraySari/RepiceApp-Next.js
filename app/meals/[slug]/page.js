import { getMeal } from "@/lib/meals";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);

  if (!meal)
    return {
      title: "Not found",
      description: "Meal is not found",
    };

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealInfo({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound(); //notFound varsa onu yoksa errora gider
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>by {meal.creator}</p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
