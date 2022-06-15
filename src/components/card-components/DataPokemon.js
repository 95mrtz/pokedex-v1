import styled from "styled-components";
import AbilityType from "../../colours/abilityType";
import Colours from "../../colours/colours";


const Container = styled.section`
background-color: ${(props) =>
    props.type ? AbilityType(props.type) : "white"};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IdPokemon = styled.h2`
  font-size: 15px;
  font-weight: 900;
`;

const NamePokemon = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 5px;
`;

const Types = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Medidas = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Type = styled.button`
  background-color: ${(props) =>
    props.type ? Colours(props.type) : "#ffd015"};
  color: ${(props) => (props.type ? "white" : "black")};
  padding: 8px 10px;
  margin: 0 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 13px;
`;

const DataPokemon = ( { type, info,  id, name, weight, height }) => {
    return(
        <Container type={type}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            id ? id : info.id
          }.png`}
          alt={name ? name : info.name}
          width="100px"
          height="110px"
        />
        <Information>
          <IdPokemon> #{id ? id : info.id}</IdPokemon>
          <NamePokemon> {name ? name : info.name} </NamePokemon>
        </Information>
        <Types>
          {type?.map((element) => (
            <Type key={element} type={element}> {element} </Type>
          ))}
        </Types>
        <Medidas>
          <p>weight: <strong>{weight ? weight : info.weight} kg</strong> </p>
          <p>height: <strong>{height ? height : info.height} mts</strong></p>
        </Medidas>
      </Container>
    )
}

export default DataPokemon