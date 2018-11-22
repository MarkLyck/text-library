import { Fragment, useState } from "react";
import Message from "../Message";
import NewMessage from "../NewMessage";
import { Container, Title } from "./styles";

const Category = ({ category, refetch }) => {
  const [expanded, setExpanded] = useState("");
  const handleOnClick = event => setExpanded(!expanded)

  return (
  <Container expanded={expanded}>
    <Title onClick={handleOnClick}>{category.name}</Title>
    {expanded && (
      <Fragment>
        <ul>
        {category.messages
          .sort((a, b) => b.positive - a.positive)
          .map(message => (
            <Message message={message} key={message.id} refetch={refetch} />
          ))}
      </ul>
      <NewMessage category={category} refetch={refetch} />
    </Fragment>
    )}
    
  </Container>
)};

export default Category;
