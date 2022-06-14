import styled from "styled-components";

const Container = styled.div`
  margin: 5px 0;
  text-align: center;

  & p {
    font-weight: 700;
  }
`;

const FunFact = () => {
    return(
        <Container>
        <p>Fun fact: To date there are 898 pokemon!</p>
      </Container>
    )
}

export default FunFact