import React from "react";
import { Grid as GridCard, Button, Card, Image, List } from "semantic-ui-react";
import PropTypes from "prop-types";
import UserPlaceHolder from "./../images/userPlaceHolder.png";

const Grid = ({ people: { characters, loading } }) => {
  return (
    <Card.Group centered stackable itemsPerRow={2}>
      {!loading &&
        characters.map((c) => (
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
                    <Card.Header as="h4">Character Name</Card.Header>
                    <Card.Meta>Character Fea</Card.Meta>
                    <Card.Meta>Character Fea</Card.Meta>
                    <Card.Meta>Character Fea</Card.Meta>
                  </Card.Content>
                </GridCard.Column>
                <GridCard.Column width={7}>
                  <Card.Content>
                    <Card.Header as="h4">Movies</Card.Header>
                    <List>
                      <List.Item>
                        <List.Icon name="play" />
                        <List.Content>
                          <a href="mailto:jack@semantic-ui.com">
                            Movie adresssssssss
                          </a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="play" />
                        <List.Content>
                          <a href="mailto:jack@semantic-ui.com">
                            Movie adresssssssss
                          </a>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Card.Content>
                </GridCard.Column>
              </GridCard.Row>
            </GridCard>
          </Card>
        ))}
    </Card.Group>
  );
};

Grid.propTypes = {
  people: PropTypes.object.isRequired,
};

export default Grid;
