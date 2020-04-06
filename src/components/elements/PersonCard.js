import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UserPlaceHolder from "./../images/userPlaceHolder.png";
import {
  selectCharacter,
  fetchCharacterProfile,
  fetchCharacterMovies,
} from "../../actions/character";
import store from "./../../store";

import PropTypes from "prop-types";

import { Grid as GridCard, Card, Image, List } from "semantic-ui-react";

export const PersonCard = ({
  character: { name, height, mass, gender, birth_year, films },
  id,
  selectCharacter,
  fetchCharacterProfile,
  fetchCharacterMovies,
}) => {
  const handleClick = () => {
    selectCharacter(id);
    fetchCharacterProfile(id);
    fetchCharacterMovies(films);
  };
  return (
    <Card onClick={handleClick}>
      <GridCard>
        <GridCard.Row>
          <GridCard.Column width={4}>
            <Card.Content>
              <Image centered size="small" src={UserPlaceHolder} />
            </Card.Content>
          </GridCard.Column>
          <GridCard.Column width={5}>
            <Card.Content>
              <Card.Header as="h4">{name}</Card.Header>
              <Card.Meta>
                {" "}
                <strong>Birth:</strong> {birth_year}
              </Card.Meta>
              <Card.Meta>
                <strong>Height:</strong> {height}
              </Card.Meta>
              <Card.Meta>
                <strong>Mass:</strong> {mass}
              </Card.Meta>
              <Card.Meta>
                <strong>Gender:</strong> {gender}
              </Card.Meta>
            </Card.Content>
          </GridCard.Column>
          <GridCard.Column width={7}>
            <Card.Content>
              <Card.Header as="h4">Movies</Card.Header>
              <List>
                {/* {!movies.loading && filmList.map((list) => (
                  <List.Item>
                    <List.Icon name="play" />
                    <List.Content>
                      <a href="mailto:jack@semantic-ui.com">{list.title}</a>
                    </List.Content>
                  </List.Item>
                ))} */}
              </List>
            </Card.Content>
          </GridCard.Column>
        </GridCard.Row>
      </GridCard>
    </Card>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  selectCharacter,
  fetchCharacterProfile,
  fetchCharacterMovies,
})(PersonCard);
