import React from "react";
import { Container } from "semantic-ui-react";

import SearchBar from "./elements/SearchBar";
import PeopleGrid from "./elements/PeopleGrid";

import Pagination from "./elements/Pagination";
import Header from "./Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <PeopleGrid />
      <Pagination />
    </Container>
  );
};

export default Home;
