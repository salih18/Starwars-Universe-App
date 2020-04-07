import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "./../../actions/movie";
import {
  Segment,
  Divider,
  Item,
  Label,
  Container,
} from "semantic-ui-react";

import PlaceHolder from "./PlaceHolder";
import MovieImage from "./../images/movie-icon.svg";

const MovieDetails = ({ movie: { selected, loading }, match, fetchMovie }) => {
  useEffect(() => {
    fetchMovie(match.params.id);
  }, [fetchMovie, match.params.id]);

  return loading ? (
    <PlaceHolder />
  ) : (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={MovieImage} />
            <Item.Content>
              <Item.Header as="a">{selected.title}</Item.Header>
              <Item.Meta>
                <div className="cinema">
                  <span>
                    <strong>Director:</strong>{" "}
                  </span>
                  {selected.director}
                </div>
                <Divider horizontal></Divider>
                <div className="cinema">
                  <span>
                    <strong>Producer:</strong>{" "}
                  </span>
                  {selected.producer}
                </div>
              </Item.Meta>
              <Divider horizontal></Divider>
              <Item.Description>{selected.opening_crawl}</Item.Description>
              <Item.Extra>
                <Label>{selected.release_date}</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { fetchMovie })(MovieDetails);
