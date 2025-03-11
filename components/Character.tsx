import { FunctionComponent } from "preact";

type CharacterProps = {
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

const Character: FunctionComponent<CharacterProps> = (props) => {
  const {
    name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld,films,species,vehicles,starships} = props;
  return (
    <div class="personaje">
      <h1>{name}</h1>
      <p>
        <strong>Altura:</strong> {height} cm
      </p>
      <p>
        <strong>Peso:</strong> {mass} kg
      </p>
      <p>
        <strong>Color de cabello:</strong> {hair_color}
      </p>
      <p>
        <strong>Color de piel:</strong> {skin_color}
      </p>
      <p>
        <strong>Color de ojos:</strong> {eye_color}
      </p>
      <p>
        <strong>Año de nacimiento:</strong> {birth_year}
      </p>
      <p>
        <strong>Género:</strong> {gender}
      </p>
      <p>
        <strong>Planeta:</strong> <a href={homeworld} target="_blank" rel="noopener noreferrer">Ver planeta</a>
      </p>
      <p>
        <strong>Películas:</strong>
        {" "}
      </p>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <a href={film} target="_blank" rel="noopener noreferrer">
              Ver película {index + 1}
            </a>
          </li>
        ))}
      </ul>
      <p>
        <strong>Especies:</strong>
        {" "}
      </p>
      <ul>
      {species.length > 0 ? (
          species.map((specie, index) => (
            <li key={index}>
              <a href={specie} target="_blank" rel="noopener noreferrer">
                Ver especie {index + 1}
              </a>
            </li>
          ))
        ) : (
          <li>No hay información</li>
        )}
      </ul>
      <p>
        <strong>Vehículos:</strong>
        {" "}
      </p>
      <ul>
      {vehicles.length > 0 ? (
          vehicles.map((vehicles, index) => (
            <li key={index}>
              <a href={vehicles} target="_blank" rel="noopener noreferrer">
                Ver vehículo {index + 1}
              </a>
            </li>
          ))
        ) : (
          <li>No hay información</li>
        )}
      </ul>
      <p>
        <strong>Naves:</strong>
        {" "}
      </p>
      <ul>
      {starships.length > 0 ? (
          starships.map((starships, index) => (
            <li key={index}>
              <a href={starships}  target="_blank" rel="noopener noreferrer">
                Ver nave {index + 1}
              </a>
            </li>
          ))
        ) : (<li>No hay información</li>)}
      </ul>

    </div>
  );
};

export default Character;
