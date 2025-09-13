
import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';
import { faker } from '@faker-js/faker';

const articles = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 1,
  title: faker.lorem.words(3),        
  desc: faker.lorem.sentence(),        
  author: faker.name.firstName(),     
  image: `https://picsum.photos/20${index}`, 
  rating: 5
}));

const FeaturedArticles = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Featured Articles</h2>
    <Card.Group itemsPerRow={4}>
      {articles.map(article => <ArticleCard key={article.id} {...article} />)}
    </Card.Group>
    <div style={{ marginTop: '1rem' }}>
      <Button>See all articles</Button>
    </div>
  </div>
);

export default FeaturedArticles;
