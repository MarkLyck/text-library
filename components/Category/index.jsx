import React from "react";
import Message from "../Message";
import NewMessage from "../NewMessage";
import { Container, Title } from "./styles";

const Category = ({ category, refetch }) => (
  <Container>
    <Title>{category.name}</Title>
    <ul>
      {category.messages
        .sort((a, b) => b.positive - a.positive)
        .map(message => (
          <Message message={message} key={message.id} refetch={refetch} />
        ))}
    </ul>
    <NewMessage category={category} refetch={refetch} />
  </Container>
);

export default Category;
