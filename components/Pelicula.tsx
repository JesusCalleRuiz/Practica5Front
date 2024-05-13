import { FunctionComponent } from "preact";
import {PeliculaProps} from "../types.ts"

const Pelicula: FunctionComponent<PeliculaProps> = (props) => {
  const { name, brand,staticImageUrl,description} = props;
  return (
    <a href={`/${name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className ="peliculas-container">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={staticImageUrl} alt={name} />
      <h3 class="text-overflow">{brand}</h3>
      <h3 class="text-overflow">{description}</h3>
      </div>
    </a>
  );
};

export default Pelicula;