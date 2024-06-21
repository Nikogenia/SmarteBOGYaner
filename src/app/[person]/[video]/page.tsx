"use client";

import NotFound from "@/app/not-found";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Person } from "@/utils/types";
import { getPerson } from "@/utils/data";
import ErrorPage from "@/app/error";

export default function VideoPage({ params }: { params: { person: string, video: string } }) {

  const [person, setPerson] = useState<Person | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getPerson(params.person, setPerson, setNotFound, setError);
  }, [params.person]);

  if (notFound) {
    return <NotFound />;
  }

  if (error != null) {
    return <ErrorPage error={error} reset={() => setError(null)} />;
  }

  return (
    <div className="">
    </div>
  );

}

function Info({ person }: { person: Person | null }) {

  if (person == null) {
    return (
      <div className="p-10 flex justify-center items-center bg-black">
        <span className="loader w-20 h-20"></span>
      </div>
    );
  }

  return (
    <div className="relative p-10 flex flex-col justify-between bg-black">
      <div className="absolute right-10 top-10 z-30 flex flex-col items-center">
        <p className="font-medium text-base/none">{person.abi}</p>
        <p className="font-extralight text-sm">Abitur</p>
      </div>
      <div className="mb-10 z-20">
        <h1 className="font-bold text-3xl/none mb-2">{person.name}</h1>
        <p className="font-light text-xl mb-6">{person.known.toUpperCase()}</p>
        <p>{person.description}</p>
      </div>
      <p className="mb-28 z-20 font-medium text-lg">„{person.quote}”</p>
      <div className="absolute w-full h-full left-0 top-0 z-10 bg-gradient-to-r from-black/80 to-black/30"></div>
    </div>
  );

}

function Videos({ person }: { person: Person | null }) {

  if (person == null) {
    return (
      <div className="relative p-10">
        <Link href="/">
          <div className="w-full flex justify-end items-center space-x-1">
            <p className="font-semibold text-xl/none">MENÜ</p>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8">
              <g id="Menu / Close_MD">
                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </Link>
        <div className="absolute w-full h-24 left-0 bottom-12 z-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute w-16 h-full left-0 top-0 -z-20 bg-gradient-to-r from-black/10 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="h-screen p-10 space-y-6 overflow-y-auto">
        <Link href="/">
          <div className="w-full flex justify-end items-center space-x-1">
            <p className="font-semibold text-xl/none">MENÜ</p>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8">
              <g id="Menu / Close_MD">
                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </Link>
        <div className="w-full flex flex-col items-center space-y-4 pb-20">
          {person.videos.map(video => (
            <Link key={video.id} href={"/" + person.id + "/" + video.id}
              className="relative w-full h-44 overflow-hidden rounded-xl border-white border-[0.1rem] flex justify-center items-end bg-black">
              <h2 className="mb-4 text-center px-4 z-20">{video.name}</h2>
              <svg viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-20 left-4 top-4 w-8 drop-shadow-[0_0_70px_#000000]">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="absolute w-full h-2/3 left-0 bottom-0 z-10 bg-gradient-to-t from-black/90 to-transparent"></div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute w-full h-24 left-0 bottom-12 z-30 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute w-16 h-full left-0 top-0 -z-20 bg-gradient-to-r from-black/10 to-transparent"></div>
    </div>
  );

}
