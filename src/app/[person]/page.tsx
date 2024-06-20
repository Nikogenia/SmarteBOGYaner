"use client";

import NotFound from "@/app/not-found";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Person } from "@/utils/types";
import { getPerson } from "@/utils/data";
import ErrorPage from "@/app/error";

export default function PersonPage({ params }: { params: { person: string } }) {

  const [person, setPerson] = useState<Person | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getPerson(params.person, setPerson, setNotFound, setError);
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  if (error != null) {
    return <ErrorPage error={error} reset={() => setError(null)} />;
  }

  return (
    <div className="grid grid-rows-1 grid-cols-[auto_24rem]">
      <Info person={person}></Info>
      <Videos person={person}></Videos>
    </div>
  );

}

function Info({ person }: { person: Person | null }) {

  if (person == null) {
    return (
      <div className="w-full">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="relative p-10 flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-3xl/none mb-2">{person.name}</h1>
        <p className="font-light text-xl mb-6">{person.known.toUpperCase()}</p>
        <p>{person.description}</p>
      </div>
      <p className="mb-28 z-20 font-medium text-lg">„{person.quote}”</p>
      <div className="absolute w-full h-full left-0 top-0 z-10 bg-gradient-to-r from-black/80 to-black/30"></div>
      <Image src={process.env.COVER_URL + person.cover} alt={person.name} fill priority className="object-cover"></Image>
    </div>
  );

}

function Videos({ person }: { person: Person | null }) {

  if (person == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 space-y-4 overflow-y-auto">
      <Link href="/">
        <div className="w-full flex justify-end">
          <p className="font-semibold text-xl/none">MENÜ</p>
        </div>
      </Link>
      <div className="w-full flex flex-col items-center space-y-4">
        {person.videos.map(video => (
          <Link key={video.id} href={"/" + person.id + "/" + video.id}
          className="relative w-full h-44 overflow-hidden rounded-xl border-white border-[0.1rem] flex justify-center items-end">
            <h2 className="mb-4">{video.name}</h2>
            <svg viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-4 w-8">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#FFFFFF">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"></path>
                  </g>
                </g>
              </g>
            </svg>
              <div className="absolute w-full h-2/3 left-0 bottom-0 z-10 bg-gradient-to-t from-black/90 to-transparent"></div>
              <Image src={process.env.THUMBNAIL_URL + video.thumbnail} alt={video.name} fill sizes="50vw" className="object-cover"></Image>
          </Link>
        ))}
      </div>
    </div>
  );

}
