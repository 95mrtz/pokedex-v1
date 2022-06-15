import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";


const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 150px auto 50px;
  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";

  // si la pantalla es mas grande que  720 pix pasa esto:
  @media only screen and (min-width: 720px) {
    grid-template-columns: 2% 96% 2%;
  }

  // si la pantalla es mas grande que  940 pix pasa esto:
  @media only screen and (min-width: 940px) {
    grid-template-columns: 5% 90% 5%;
  }

  // si la pantalla es mas grande que  1200 pix pasa esto:
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 10% 80% 10%;

  }
`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [urlPokemon, setUrlPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=6"
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


  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
    <Container>
      <Header theme={theme} setTheme={setTheme} isDark={isDarkTheme} />
      <Main list={pokemons} nextUrl={urlPokemon} />
      <Footer />
    </Container>
    </>
    </ThemeProvider>
  );
};

export default App;
