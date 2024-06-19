"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFoundPage() {

  const router = useRouter();
  const [redirect, setRedirect] = useState(8);

  useEffect(() => {
      
    const interval = setInterval(() => {
      setRedirect(redirect => redirect - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      router.push("/");
    }, 8000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-5xl font-bold">Seite nicht gefunden!</h1>
      <p className="italic">Weiterleitung zur Startseite in {redirect} Sekunden ...</p>
    </div>
  );

}
