import { DATA_URL } from "./constants";
import { Person } from "./types";
import yaml from "js-yaml";

export async function getPerson(id: string, setPerson: (person: Person) => void, setNotFound: (notFound: boolean) => void, setError: (error: Error) => void) {
  
  function fail(reason: any) {
    console.error(reason);
    setNotFound(true);
  }

  console.log("Fetch " + id + ".yml");

  let response = await fetch(DATA_URL + id + ".yml");
  if (response == null || !response.ok) {
    fail(response.status + ": " + response.statusText);
    return;
  }

  let text = await response.text();
  if (text == null) {
    fail(response.statusText);
    return;
  }

  try {
    let data = yaml.load(text, {onWarning: setError}) as Person;
    setPerson({ ...data, id: id });
  } catch (error: any) {
    setError(error);
    return;
  }

}
