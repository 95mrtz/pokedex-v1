import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Container = styled.section`
  width: 100%;
  margin-bottom: 10px;
  padding: 14px 0;
  background-color: #ebebeb;
  border-radius: 5px;
`;

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

let Style = {
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    search: {
      width: "80%",
      outline: "none",
      border: "none",
      padding: "8px 12px",
      margin: "5px 0",
      borderRadius: "5px",
      boxShadow: "5px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      fontSize: "14px",
    },
  };
  
const Search = ( { setBusquedaPokemon } ) => {
    return(
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
    )
}

export default Search
