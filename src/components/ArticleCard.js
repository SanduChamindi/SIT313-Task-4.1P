import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const articles = Array.from({ length: 3 }, () => ({
  title: faker.lorem.words(3),
  description: faker.lorem.words(6),
  tech: faker.helpers.randomize(['React', 'Vue', 'Angular', 'Next.js']),
  author: faker.name.findName(),
  rating: 5,
  image: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`
}));

const ArticleCards = () => (
  <div style={{ padding: '2em' }}>
    <h2>📚 Articles</h2>
    <Card.Group itemsPerRow={3} stackable>
      {articles.map((article, index) => (
        <Card key={index}>
          <Image src={article.image} alt="Article image" wrapped ui={false} />
          <Card.Content>
            <Card.Header style={{ fontSize: '1.2em' }}>{article.title}</Card.Header>
            <Card.Meta style={{ fontWeight: 'bold', marginTop: '0.5em' }}>Description</Card.Meta>
            <Card.Description style={{ color: '#888' }}>
               {article.tech}
            </Card.Description>
          </Card.Content>
          <Card.Content extra style={{ display: 'flex', alignItems: 'center' }}>
            <Icon name="star" color="yellow" /> {article.rating} &nbsp;&nbsp;
            <span style={{ fontWeight: 'bold' }}>{article.author}</span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

export default ArticleCards;
