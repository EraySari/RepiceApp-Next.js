"use client";
import { useRef } from "react";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label }) {
  const ref = useRef(null);
  function handleClick(e) {
    e.preventDefault();
    ref.current.click();
  }
  return (
    <div className={styles.picker}>
      <label htmlFor="image">{label}</label>

      <div className={styles.controls}>
        <input
          ref={ref}
          className={styles.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name="image"
          required
        />

        <button className={styles.button} onClick={(e) => handleClick(e)}>
          Picker
        </button>
      </div>
    </div>
  );
}
