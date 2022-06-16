import styled from "styled-components";


const Banner = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
  height: 60px;

  @media only screen and (min-width: 720px) {
    width: 200px;
    height: 70px;
  }
`;

const SubTitle = styled.h2`
  margin-top: 5px;
  font-size: 15px;
  text-align: center;

  @media only screen and (min-width: 720px) {
    font-size: 21px;
  }
`;

const ToggleButton = styled.button`
  padding: 8px 10px;
  margin: 10px 0;
  border: none;
  border-radius: 100%;
  cursor: pointer;

  ion-icon {
    font-size: 26px;
  }
`;

const Header = ({ theme, setTheme, isDark }) => {
  const toggleTheme = () => {
    const updatedTheme = isDark ? "light" : "dark";
    setTheme(updatedTheme);
  };


  return (
      <Banner>
        <div>
          <Logo src="./images/pokemon_logo.webp" alt="pokemon logo" />
          <SubTitle>
            Pokedex powered by <br />
            <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
              PokeAPI
            </a>
          </SubTitle>
        </div>

        <ToggleButton onClick={toggleTheme}>
          {isDark ? (
            <ion-icon className="icon" size="medium" name="sunny"></ion-icon>
          ) : (
            <ion-icon className="icon" size="medium" name="moon"></ion-icon>
          )}
        </ToggleButton>
      </Banner>
  );
};

export default Header;
