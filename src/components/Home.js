import React, { useEffect } from "react";
import { connect } from "react-redux";

import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

import { fetchPeople } from "../actions/people";

import PropTypes from "prop-types";

const Home = ({ fetchPeople, people }) => {
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  useEffect(() => {
    sessionStorage.setItem("peopleState", JSON.stringify(people.characters));
  }, [people]);

  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid people={people} />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

Home.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  people: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  people: state.people,
});

export default connect(mapStateToProps, { fetchPeople })(Home);
