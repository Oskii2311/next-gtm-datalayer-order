"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [entries, setEntries] = useState<string[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEntries((window.dataLayer ?? []).map((entry) => JSON.stringify(entry)));
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      <h1>window.dataLayer, in push order</h1>
      <ol id="entries">
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ol>
    </main>
  );
}
