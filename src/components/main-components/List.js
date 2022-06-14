import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  grid-gap: 10px;

      // si la pantalla es mas grande que  720 pix pasa esto:
      @media only screen and (min-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
      }

    // si la pantalla es mas grande que  940 pix pasa esto:
    @media only screen and (min-width: 940px) {
      grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 4px;
    }

  // si la pantalla es mas grande que  1200 pix pasa esto:
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 7px;
  }
`;

const List = ({ busqueda, pokemons }) => {
  return (
    <Container>
      {busqueda !== "" ? (
        <Card
          name={busqueda.name}
          id={busqueda.id}
          types={busqueda.types}
          weight={busqueda.weight}
          height={busqueda.height}
          abilities={busqueda.abilities}
          stats={busqueda.stats}
        />
      ) : (
        pokemons.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} link={pokemon.url} />
        ))
      )}
    </Container>
  );
};

export default List;
