import styles from "./meal-grid";
import MealItem from "./meal-item";

export default function MealGrid({ mealsData }) {
  return (
    <ul className={styles.meals}>
      {mealsData.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
