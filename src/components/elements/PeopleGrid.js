import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import PersonCard from "./PersonCard";
import PropTypes from "prop-types";

const PeopleGrid = ({ characters: { characters, loading }, movies }) => {
  console.log(characters)
  return (
    <Card.Group centered stackable itemsPerRow={2}>
      {!loading &&
        characters.map((character, index) => (
          <PersonCard key={index} id={index + 1} character={character} />
        ))}
    </Card.Group>
  );
};

PeopleGrid.propTypes = {
  characters: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  movies: state.movies,
});

export default connect(mapStateToProps, {})(PeopleGrid);
