import { useEffect, useState } from "react";
import styled from "styled-components";
import DataPokemon from "./card-components/DataPokemon";
import AbilitiesPokemon from "./card-components/AbilitiesPokemon"
import Background from "../colours/background";


const Container = styled.article`
  background-color: ${(props) =>
    props.backgroundColor ? Background(props.backgroundColor) : "white"};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 5px;
`;


const Card = ({ link, name, id, types, height, weight, stats, abilities }) => {
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

  const typePokemon = (types ? types : infoPokemon.types)?.map(
    (element) => element.type.name
  );
  const abilitiesList = (abilities ? abilities : infoPokemon.abilities)?.map(
    (element) => element.ability.name
  );
  const ArrayStat = (stats ? stats : infoPokemon.stats)?.map((element) => element.base_stat);
  const ArrayNameStat = (stats ? stats : infoPokemon.stats)?.map((element) => element.stat.name);

  return (
    <Container backgroundColor={typePokemon}>

      <DataPokemon type={typePokemon} info={infoPokemon} name={name} id={id} height={height} weight={weight}/>
      <AbilitiesPokemon abilities={abilitiesList} stat={ArrayStat} nameStat={ArrayNameStat} />

    </Container>
  );
};

export default Card;

