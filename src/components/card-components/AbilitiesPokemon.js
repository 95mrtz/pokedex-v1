import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const Skills = styled.article`
  display: flex;
  flex-direction: column;

  & p {
    text-align: center;
  }
  & ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  & ul > li {
    list-style: none;
    margin: 0 3px;
    font-style: italic;
  }
`;

const Stats = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 2px;

  & div {
    font-size: 0.9em;
  }

  & div > p {
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
`;

const AbilitiesPokemon = ({ abilities, nameStat, stat }) => {
  return (
    <Container>
      <Skills>
        <p>
          <strong>Skills:</strong>
        </p>
        <ul>
          {abilities?.map((element) => (
            <li key={element}>&#8226; {element}</li>
          ))}
        </ul>
      </Skills>

      <Stats>
        {nameStat?.map((name, index) => (
          <div key={name}>
            <p>{name}: </p>
            <progress value={stat[index]} max="100">
              {stat[index]}%
            </progress>
          </div>
        ))}
      </Stats>
    </Container>
  );
};

export default AbilitiesPokemon;
