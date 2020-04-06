import React, { useEffect } from "react";
import { connect } from "react-redux";

import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import PeopleGrid from "./elements/PeopleGrid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";
import Pagination from "./elements/Pagination";

import { fetchCharacters } from "../actions/characters";


import PropTypes from "prop-types";

const Home = ({ fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // useEffect(() => {
  //   movies.films.forEach((movie) => {
  //     sessionStorage.setItem(movie.url, JSON.stringify(movie));
  //   });
  // }, [movies]);

  return (
    <>
      <HeroImage />
      <SearchBar />
      <PeopleGrid />

      <MovieThumb />
      <Spinner />
      <Pagination />
    </>
  );
};

Home.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
};

export default connect(null, { fetchCharacters: fetchCharacters })(Home);
