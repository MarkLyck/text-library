import Main from "../lib/layout";
import withData from "../lib/apollo";
import CategoryList from "../components/CategoryList";

export default withData(props => (
  <Main>
    <CategoryList />
  </Main>
));
