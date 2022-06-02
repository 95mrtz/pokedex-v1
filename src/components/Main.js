import { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import Card from "./Card";

const PokemonList = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navigation = styled.div`
  width: 100%;
  grid-column: 1/5;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 21px;
  font-size: 15px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Container = styled.section`
  grid-area: search;
  width: 100%;
  margin-bottom: 10px;
  padding: 14px 0;
  background-color: #ebebeb;
  border-radius: 5px;
`;

const FunFact = styled.div`
  margin: 5px 0;
  text-align: center;

  & p {
    font-weight: 700;
  }
`

const SearchBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  margin: 0 4px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 23%);
  height: 100%;
  width: 100%;
  grid-gap: 10px;
`;

const Style = {
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  search: {
    width: "80%",
    outline: "none",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    boxShadow: "5px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    fontSize: "14px",
  },
};

const Main = ({ list, nextUrl }) => {
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);

  const [pokemons, setPokemons] = useState(list);
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
      <Container>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            if (values.search !== "") {
              let search = values.search.toLowerCase();
              try {
                const response = await fetch(
                  `https://pokeapi.co/api/v2/pokemon/${search}`
                );
                const data = await response.json();
                setBusquedaPokemon(data);
                console.log(values);
                console.log(data);
              } catch (error) {
                console.error(error);
                console.log("hubo un error");
                alert(
                  "You must enter the correct name of the pokemon you are looking for"
                );
              }

              if (values.search === "") {
                setBusquedaPokemon("");
              }
            }
          }}
        >
          <Form style={Style.form}>
            <Field style={Style.search} type="text" name="search" placeholder="Enter the name of the pokemon or its number in the pokedex"></Field>
            <SearchBtn type="submit">
              {" "}
              Search <ion-icon name="search-outline"></ion-icon>{" "}
            </SearchBtn>
          </Form>
        </Formik>
      </Container>
      <FunFact>
        <p>Fun fact: To date there are 898 pokemon!</p>
      </FunFact>
      <List>
        {busquedaPokemon !== "" ? (
            <Card
              key={busquedaPokemon.name}
              name={busquedaPokemon.name}
              id={busquedaPokemon.id}
              types={busquedaPokemon.types}
            ></Card>
        ) : (
          pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              link={pokemon.url}
            ></Card>
          ))
        )}
      </List>
      {busquedaPokemon !== "" ? (
          <Navigation>
            <Button onClick={() => setBusquedaPokemon("")}>Volver a la lista</Button>
          </Navigation>
        ) : (
          <Navigation>
            <Button
          onClick={() => {
            setPrevious(true);
          }}
          disabled={
            urlPokemonPrev === null || urlPokemonPrev === "" ? true : false
          }
        >
          {" "}
          Previous{" "}
        </Button>
        <Button
          onClick={() => {
            setNext(true);
          }}
          disabled={
            urlPokemonNext === null || urlPokemonNext === "" ? true : false
          }
        >
          {" "}
          Next{" "}
        </Button>
          </Navigation>
        )}

    </PokemonList>
  );
};

export default Main;
