import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import PersonCard from "./PersonCard";
import PropTypes from "prop-types";

import PlaceHolder from "./PlaceHolder";

import { fetchCharacters } from "./../../actions/characters";

const PeopleGrid = ({
  characters: { characters, loading, movies },
  fetchCharacters,
  pagination: { aPage, aSearchPage },
  search:{searchTerm, isSearchActive}
}) => {
  useEffect(() => {
    fetchCharacters(aPage, aSearchPage, searchTerm);
  }, [aPage, aSearchPage, fetchCharacters, searchTerm]);

  useEffect(() => {
    !loading &&
      movies.forEach((movie) => {
        sessionStorage.setItem(movie.episode_id, JSON.stringify(movie));
      });
  }, [loading, movies]);

  return (
    <Card.Group centered stackable itemsPerRow={2}>
      {loading ? (
        <PlaceHolder />
      ) : (
        characters.map((character, index) => (
          <PersonCard
            key={index}
            id={index + 1}
            character={character}
            movieList={movies}
          />
        ))
      )}
    </Card.Group>
  );
};

PeopleGrid.propTypes = {
  characters: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  pagination: state.pagination,
  search: state.search
});

export default connect(mapStateToProps, { fetchCharacters })(PeopleGrid);
