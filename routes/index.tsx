import Axios from "npm:axios";
import { PeliculaProps } from "../types.ts"
import Peliculas from "../components/Peliculas.tsx";

export default async function Home() {
  try {
    const response = await Axios.get<PeliculaProps[]>(
      "https://filmapi.vercel.app/api/films",
    );
    const peliculas = response.data;
    return (
      <div class="flex-column">
        <h1 class= "mainTitle">Peliculas</h1>
        <div class="flex-row flex-around">
        {peliculas.map((s) => (
          <Peliculas name={s.name} brand={s.brand} staticImageUrl={s.staticImageUrl} description={s.description}/>
        ))}
      </div>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
