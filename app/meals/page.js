import Link from "next/link";
import styles from "./page.module.css";
import getMeals from "@/lib/meals";
import MealGrid from "@/components/meals/meal-grid";
import { Suspense } from "react";

async function Meals() {
  const mealsData = await getMeals();
  return <MealGrid mealsData={mealsData} />;
}

export default function Meal() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite food and cook it yourself.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
