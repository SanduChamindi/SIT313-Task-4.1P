import React from 'react';
import { Card, Image, Icon, Rating } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const articles = Array.from({ length: 3 }, () => ({
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  tech: faker.helpers.arrayElement(['React', 'Vue', 'Angular', 'Svelte']),
  author: faker.person.fullName(),
  rating: 4 + Math.floor(Math.random() * 2),
  image: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`
}));

const FeaturedSection = () => (
  <div style={{ padding: '2em' }}>
    <h2 style={{ marginBottom: '1em' }}>🌟 Featured Articles</h2>
    <Card.Group itemsPerRow={3} stackable>
      {articles.map((article, index) => (
        <Card
          key={index}
          raised
          style={{
            borderRadius: '12px',
            transition: 'transform 0.2s ease',
            overflow: 'hidden'
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
        >
          <Image
            src={article.image}
            wrapped
            ui={false}
            alt="Article"
            style={{ borderRadius: '12px 12px 0 0' }}
          />
          <Card.Content>
            <Card.Header style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>{article.title}</Card.Header>
            <Card.Meta style={{ fontWeight: 'bold', color: '#555' }}>e.g., {article.tech}</Card.Meta>
            <Card.Description style={{ color: '#666', fontSize: '0.95em', marginTop: '0.4em' }}>
              {article.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Rating icon="star" defaultRating={article.rating} maxRating={5} disabled />
              <span style={{ marginLeft: '0.5em', fontWeight: 'bold' }}>{article.rating}.0</span>
            </div>
            <span style={{ fontWeight: 'bold' }}>{article.author}</span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

export default FeaturedSection;
