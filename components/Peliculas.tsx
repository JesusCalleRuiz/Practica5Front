import { FunctionComponent } from "preact";
import {PeliculaProps} from "../types.ts"

const Peliculas: FunctionComponent<PeliculaProps> = (props) => {
  const { name, brand,staticImageUrl,description} = props;
  return (
    <a href={`/${name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className ="peliculas-container">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={staticImageUrl} alt={name} />
      <h3 class="text-overflow">{brand}</h3>
      <p class="text-overflow">{description}</p>
      </div>
    </a>
  );
};

export default Peliculas;