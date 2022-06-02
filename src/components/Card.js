import { useEffect, useState } from "react";
import styled from "styled-components";
import Colours from "../colours/colours";
import Background from "../colours/background";


const Container = styled.article`
  background-color: ${(props) => props.backgroundColor ? Background(props.backgroundColor) : "white"};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: 5px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IdPokemon = styled.h2`
  font-size: 21px;
  font-weight: 900;
  color: #78909c;
`;

const NamePokemon = styled.p`
  font-size: 18px;
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

const Type = styled.button`
  background-color: ${(props) =>
    props.type ? Colours(props.type) : "#ffd015"};
  color: ${(props) => (props.type ? "white" : "black")};
  padding: 8px 10px;
  margin: 0 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 16px;
`;

const Card = ({ link, name, id, types }) => {
  //console.log("me renderice");
  const [infoPokemon, setInfoPokemon] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(link);
        const data = await response.json();
        setInfoPokemon(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);


  const typePokemon =((types) ? types : infoPokemon.types)?.map((element) => element.type.name);

  return (
    <Container key={(id) ? id : infoPokemon.id} backgroundColor={typePokemon}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(id) ? id : infoPokemon.id}.png`}
        //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(id) ? id : infoPokemon.id}.svg`}
        alt={(name) ? name : infoPokemon.name}
        width="80px"
        height="90px"
      />
      <Information>
        <IdPokemon> #{(id) ? id : infoPokemon.id}</IdPokemon>
        <NamePokemon> {(name) ? name : infoPokemon.name} </NamePokemon>
      </Information>
      <Types>
        { typePokemon?.map((element) => (
          <Type type={element}> {element} </Type>
        ))}
      </Types>
    </Container>
  );
};

export default Card;

/*
 */
