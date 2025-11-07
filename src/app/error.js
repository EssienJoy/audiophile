"use client";

import Button from "./_ui/Button";

export default function Error({ error, reset }) {
  return (
    <section className="h-dvh flex justify-center items-center flex-col gap-6 px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        bgColor="bg-primary-black"
        textColor="text-primary-white"
        onClick={reset}
      >
        Try again
      </Button>
    </section>
  );
}
