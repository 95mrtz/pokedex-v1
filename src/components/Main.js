import { useState, useEffect } from "react";
import styled from "styled-components";
import List from "./main-components/List";
import Search from "./main-components/Search";
import FunFact from "./main-components/FunFact";
import Navigation from "./main-components/Navigation";

const PokemonList = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 940px) {
   align-items: center;
   width: 100%;
  }
`;

const Main = ({ list, nextUrl }) => {
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);

  const [pokemons, setPokemons] = useState(list);
  console.log("me renderice");
  const [urlPokemonNext, setUrlPokemonNext] = useState(nextUrl);
  const [urlPokemonPrev, setUrlPokemonPrev] = useState("");

  const [busquedaPokemon, setBusquedaPokemon] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(urlPokemonNext);
        const data = await response.json();
        setPokemons(data.results);
        setUrlPokemonNext(data.next);
        setUrlPokemonPrev(data.previous);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setNext(false);
  }, [next]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(urlPokemonPrev);
        const data = await response.json();
        setPokemons(data.results);
        setUrlPokemonNext(data.next);
        setUrlPokemonPrev(data.previous);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setPrevious(false);
  }, [previous]);

  return (
    <PokemonList>
      <Search setBusquedaPokemon={setBusquedaPokemon} />

      <FunFact />

      <List busqueda={busquedaPokemon} pokemons={pokemons} />

      <Navigation
        busqueda={busquedaPokemon}
        setBusqueda={setBusquedaPokemon}
        setPrevious={setPrevious}
        setNext={setNext}
        urlPokemonPrev={urlPokemonPrev}
        urlPokemonNext={urlPokemonNext}
      />
    </PokemonList>
  );
};

export default Main;
