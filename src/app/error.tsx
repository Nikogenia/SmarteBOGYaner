"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ErrorPage({error, reset}: {
  error: Error & { digest?: string },
  reset: () => void
}) {

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

  }, [router]);

  return (
    <div className="p-8 flex flex-col justify-center items-center space-y-4">
      <h1 className="text-5xl font-bold">Fehler aufgetreten!</h1>
      <p className="text-lg">{error.name}: {error.message}</p>
      <p className="italic">Weiterleitung zur Startseite in {redirect} Sekunden ...</p>
    </div>
  );

}
