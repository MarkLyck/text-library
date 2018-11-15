import { useState } from "react";
import { graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Container, Input, Button } from "../Inputs/styles";

const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!, $categoryId: ID!) {
    createMessage(text: $text, categoryId: $categoryId) {
      id
    }
  }
`;

const NewMessage = ({ category, refetch }) => {
  const [text, setText] = useState("");
  const handleOnChange = event => setText(event.target.value);

  const handleSubmit = createMessage => {
    createMessage({
      variables: { categoryId: category.id, text: text.trim() }
    })
      .then(() => setText(""))
      .then(refetch);
  };

  return (
    <Mutation mutation={CREATE_MESSAGE}>
      {createMessage => (
        <Container>
          <Input
            type="text"
            value={text}
            onChange={handleOnChange}
            placeholder="New Message..."
          />
          <Button
            isVisible={!!text}
            onClick={handleSubmit.bind(null, createMessage)}
          >
            Add
          </Button>
        </Container>
      )}
    </Mutation>
  );
};

export default NewMessage;
