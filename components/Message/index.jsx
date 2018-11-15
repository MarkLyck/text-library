import React from "react";
import { graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { copyToClipboard } from "../../lib/copyToClipboard";
import {
  MessageContainer,
  MessageText,
  ActionContainer,
  Succeses,
  VoteButton
} from "./styles";

const POSITIVE = "POSITIVE";
const NEGATIVE = "NEGATIVE";

const UPDATE_VOTE = gql`
  mutation updateMessage($id: ID!, $positive: Int, $negative: Int) {
    updateMessage(id: $id, positive: $positive, negative: $negative) {
      id
    }
  }
`;

const Message = ({ message, refetch }) => {
  const handleVote = (type, updateMessage) => {
    let { positive, negative } = message;
    if (type === POSITIVE) positive += 1;
    else negative += 1;

    updateMessage({
      variables: {
        id: message.id,
        positive: positive,
        negative: negative
      }
    }).then(refetch);
  };
  return (
    <Mutation mutation={UPDATE_VOTE}>
      {updateMessage => (
        <MessageContainer>
          <MessageText onClick={() => copyToClipboard(message.text)}>
            {message.text}
          </MessageText>
          <ActionContainer>
            <VoteButton
              positive
              onClick={handleVote.bind(null, POSITIVE, updateMessage)}
            >
              +1
            </VoteButton>
            <Succeses>
              {message.positive}/{message.positive + message.negative}
            </Succeses>
            <VoteButton
              negative
              onClick={handleVote.bind(null, NEGATIVE, updateMessage)}
            >
              -1
            </VoteButton>
          </ActionContainer>
        </MessageContainer>
      )}
    </Mutation>
  );
};

export default Message;
