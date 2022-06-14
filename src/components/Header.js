import styled from "styled-components";

const Banner = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 720px) {
    flex-direction: row;
  justify-content: space-around;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 70px;
`;

const SubTitle = styled.h2`
margin-top: 5px;
font-size: 21px;
`;

const Header = () => {
  return (
    <Banner>
      <Logo src="./images/pokemon_logo.webp" alt="pokemon logo" />
      <SubTitle>
      Pokedex powered by
        <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
          PokeAPI
        </a>
      </SubTitle>
    </Banner>
  );
};

export default Header;
