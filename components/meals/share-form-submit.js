"use client";

import { useFormStatus } from "react-dom";

export default function ShareFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
}
