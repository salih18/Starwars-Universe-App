import React from "react";
import { Container } from "semantic-ui-react";

import SearchBar from "./elements/SearchBar";
import PeopleGrid from "./elements/PeopleGrid";

import Spinner from "./elements/Spinner";
import Pagination from "./elements/Pagination";

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <PeopleGrid />
      <Spinner />
      <Pagination />
    </Container>
  );
};

export default Home;
