import React from 'react';
import { Card, Image, Icon, Rating } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const tutorials = Array.from({ length: 3 }, () => ({
  title: faker.company.catchPhrase(),
  description: faker.lorem.sentence(),
  tech: faker.helpers.arrayElement(['React', 'Vue', 'Node.js', 'TypeScript']),
  author: faker.person.fullName(),
  rating: 4 + Math.floor(Math.random() * 2),
  image: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`
}));

const TutorialCards = () => (
  <div style={{ padding: '2em' }}>
    <h2 style={{ marginBottom: '1em' }}>🎓 Latest Tutorials</h2>
    <Card.Group itemsPerRow={3} stackable>
      {tutorials.map((tutorial, index) => (
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
            src={tutorial.image}
            wrapped
            ui={false}
            alt="Tutorial"
            style={{ borderRadius: '12px 12px 0 0' }}
          />
          <Card.Content>
            <Card.Header style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>{tutorial.title}</Card.Header>
            <Card.Meta style={{ fontWeight: 'bold', color: '#555' }}>e.g., {tutorial.tech}</Card.Meta>
            <Card.Description style={{ color: '#666', fontSize: '0.95em', marginTop: '0.4em' }}>
              {tutorial.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Rating icon="star" defaultRating={tutorial.rating} maxRating={5} disabled />
              <span style={{ marginLeft: '0.5em', fontWeight: 'bold' }}>{tutorial.rating}.0</span>
            </div>
            <span style={{ fontWeight: 'bold' }}>{tutorial.author}</span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

export default TutorialCards;
