"use client";

import NotFound from "@/app/not-found";
import { COVER_URL, DATA_URL } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Person = {
    "name": string,
    "known": string,
    "description": string,
    "quote": string,
    "cover": string,
    "videos": [
      {
          "title": string,
          "thumbnail": string,
          "video": string
      }
    ]
}

export default function Person({ params }: { params: { person: string } }) {

  const [person, setPerson] = useState<Person | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {

    console.log("Fetch " + params.person + ".json");

    fetch(DATA_URL + params.person + ".json")
      .then(response => response.json())
      .then(data => setPerson(data))
      .catch(() => setNotFound(true));

  }, []);
  
  if (notFound) {
    return <NotFound />;
  }

  return (
    <div className="w-full min-h-screen flex justify-stretch items-stretch">
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
    <div className="relative p-8">
      <Image src={COVER_URL + person.cover} alt={person.name} fill className="object-cover -z-30"></Image>
      <h1 className="font-bold text-4xl">{person.name}</h1>
      <p className="font-light text-2xl">{person.known.toUpperCase()}</p>
      <p className="">{person.description}</p>
      <p>{person.quote}</p>
    </div>
  );

}

function Videos({ person }: { person: Person | null }) {

  if (person == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[900px]">
      {person.videos.map(video => (
        <div key={video.title}>
          <h2>{video.title}</h2>
          <img src={video.thumbnail} alt={video.title} />
          <video controls>
            <source src={video.video} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );

}
