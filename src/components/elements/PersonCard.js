import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserPlaceHolder from "./../images/userPlaceHolder.png";
import {
  selectCharacter,
  fetchCharacterProfile,
} from "../../actions/character";
import { fetchCharacterMovies } from "./../../actions/movies";

import { Grid as GridCard, Card, Image, List } from "semantic-ui-react";

export const PersonCard = ({
  character: { name, height, mass, gender, birth_year, films },
  id,
  movieList,
  selectCharacter,
  fetchCharacterProfile,
}) => {
  const intersection = movieList.filter((e) => {
    return films.some((item) => item === e.url);
  });

  const handleClick = () => {
    selectCharacter(id);
    fetchCharacterProfile(id);
    // fetchCharacterMovies(films);
  };

  return (
    <Card>
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
                {intersection.map((movie) => (
                  <List.Item key={movie.episode_id}>
                    <List.Icon name="play" />
                    <List.Content>
                      <Link to={`/movies/${movie.episode_id}`}>
                        {movie.title}
                      </Link>
                    </List.Content>
                  </List.Item>
                ))}
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
