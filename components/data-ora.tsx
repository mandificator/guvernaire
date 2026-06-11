"use client";

import { useEffect, useState } from "react";

function formateaza(): string {
  const acum = new Date();
  const data = new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(acum);
  const ora = new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    hour: "2-digit",
    minute: "2-digit",
  }).format(acum);
  return `${data}, ora ${ora}`;
}

export function DataOra() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(formateaza());
    const t = setInterval(() => setText(formateaza()), 30_000);
    return () => clearInterval(t);
  }, []);

  return <span suppressHydrationWarning>{text}</span>;
}
