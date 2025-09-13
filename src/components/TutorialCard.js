
import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

const TutorialCard = ({ title, desc, user, image, rating }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{desc}</Card.Meta>
      <Card.Description>
        <Rating icon='star' defaultRating={rating} maxRating={5} disabled /> {user}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default TutorialCard;