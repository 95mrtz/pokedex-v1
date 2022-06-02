import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Container = styled.div`
background-color: whitesmoke;
  display: grid;
  grid-template-areas:
    "header header"
    "main main"
    "footer footer";

  // si la pantalla es mas grande que 768 pix pasa esto:
  @media only screen and (min-width: 768px) {
    height: 100vh;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 15% 75% 10%;
    grid-template-areas:
      "header header header "
      ". main ."
      "footer footer footer ";
  }
`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [urlPokemon, setUrlPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=12"
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(urlPokemon);
        const data = await response.json();
        setPokemons(data.results);
        setUrlPokemon(data.next);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);



  return (
    <Container>
      <Header />
      {
        // le paso la url de la proxima tanda y la lista de los primeros 20 pokemones
      }
      <Main list={pokemons} nextUrl={urlPokemon} />
      <Footer />
    </Container>
  );
};

export default App;
