
import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';

const tutorials = [
  { id: 1, title: 'JS6', desc: 'JavaScript Essentials', user: 'alpha', image: 'https://picsum.photos/210', rating: 5 },
  { id: 2, title: 'React Router', desc: 'Routing in React', user: 'beta', image: 'https://picsum.photos/211', rating: 5 },
  { id: 3, title: 'Express', desc: 'Node Framework', user: 'gamma', image: 'https://picsum.photos/212', rating: 4.9 }
];

const FeaturedTutorials = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Featured Tutorials</h2>
    <Card.Group itemsPerRow={3}>
      {tutorials.map(t => <TutorialCard key={t.id} {...t} />)}
    </Card.Group>
    <div style={{ marginTop: '1rem' }}>
      <Button>See all tutorials</Button>
    </div>
  </div>
);

export default FeaturedTutorials;