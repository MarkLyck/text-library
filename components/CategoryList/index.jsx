import { graphql, Query } from "react-apollo";
import gql from "graphql-tag";
import Category from "../Category";
import NewCategory from "../NewCategory";
import { Container } from "./styles";

const ALL_CATEGORIES = gql`
  query {
    allCategories {
      id
      name
      messages {
        id
        text
        positive
        negative
      }
    }
    _allCategoriesMeta {
      count
    }
  }
`;

const CategoryList = () => (
  <Query query={ALL_CATEGORIES}>
    {({ data, loading, error, refetch }) => {
      if (error) return <p>Error loading categories.</p>;
      if (!data || !data.allCategories) return <div>Loading...</div>;
      
      return (
        <Container>
          {data.allCategories.map(category => (
            <Category category={category} key={category.id} refetch={refetch} />
          ))}
          <NewCategory refetch={refetch} />
        </Container>
      );
    }}
  </Query>
);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default CategoryList;
