import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  grid-column: 1/5;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 15px 0;

`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 21px;
  font-size: 15px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Navigation = ({
  busqueda,
  setBusqueda,
  setPrevious,
  setNext,
  urlPokemonPrev,
  urlPokemonNext,
}) => {
  return (
    <Container>
      {busqueda !== "" ? (
        <Button onClick={() => setBusqueda("")}>Volver a la lista</Button>
      ) : (
        <Container>
          <Button
            onClick={() => {
              setPrevious(true);
            }}
            disabled={
              urlPokemonPrev === null || urlPokemonPrev === "" ? true : false
            }
            children="Previous"
          />
          <Button
            onClick={() => {
              setNext(true);
            }}
            disabled={
              urlPokemonNext === null || urlPokemonNext === "" ? true : false
            }
            children="Next"
          />
        </Container>
      )}
    </Container>
  );
};

export default Navigation;
