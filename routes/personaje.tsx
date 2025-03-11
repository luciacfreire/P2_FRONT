import { Handlers, PageProps } from "$fresh/server.ts";
import Character from "../components/Character.tsx";

type CharacterData = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles:string[];
  starships:string[];
};

type Data = {
  character?: CharacterData;
  error?: string;
};

export const handler: Handlers<Data> = {
  GET: async (req, ctx) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");

    if (!name) {
      return ctx.render({ error: "No has buscado ningún personaje" });
    }

    const apiUrl = `https://swapi.dev/api/people/?search=${name}&format=json`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.count === 0) {
      return ctx.render({ error: "No se ha encontrado el personaje" });
    }

    return ctx.render({ character: data.results[0] });
  },
};

const PersonajePage = (props: PageProps<Data>) => {
  const { character, error } = props.data;

  return (
    <div class="container">
      {error ? (<h1 class="error">{error}</h1>) : (character && <Character {...character} />)}
    </div>
  );
};

export default PersonajePage;
