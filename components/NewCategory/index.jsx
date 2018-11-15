import { useState } from "react";
import { graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Container, Input, Button } from "../Inputs/styles";

const CREATE_CATEGORY = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      id
    }
  }
`;

const NewCategory = ({ category, refetch }) => {
  const [name, setName] = useState("");
  const handleOnChange = event => setName(event.target.value);

  const handleSubmit = createMessage => {
    createMessage({
      variables: { name: name.trim() }
    })
      .then(() => setName(""))
      .then(refetch);
  };

  return (
    <Mutation mutation={CREATE_CATEGORY}>
      {createCategory => (
        <Container>
          <Input
            type="text"
            value={name}
            onChange={handleOnChange}
            placeholder="New category..."
          />
          <Button
            isVisible={!!name}
            onClick={handleSubmit.bind(null, createCategory)}
          >
            Add
          </Button>
        </Container>
      )}
    </Mutation>
  );
};

export default NewCategory;
