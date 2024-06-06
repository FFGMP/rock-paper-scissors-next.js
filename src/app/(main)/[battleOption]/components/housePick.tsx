"use client";

import { useEffect } from "react";

export default function HousePick() {
  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch("/api/house-pick");
      const data = await response.json();
      console.log(data);
    };
    apiCall();
  }, []);
  return <p>{}</p>;
}
