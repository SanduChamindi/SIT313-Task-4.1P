
import React from 'react';
import { Grid, List, Icon } from 'semantic-ui-react';

const Footer = () => (
  <div style={{ background: '#00796b', color: 'white', padding: '2rem' }}>
    <Grid columns={3} divided stackable>
      <Grid.Row>
        <Grid.Column>
          <h4>Explore</h4>
          <List link inverted>
            <List.Item as='a'>Home</List.Item>
            <List.Item as='a'>Questions</List.Item>
            <List.Item as='a'>Articles</List.Item>
            <List.Item as='a'>Tutorials</List.Item>
          </List>
        </Grid.Column>

        <Grid.Column>
          <h4>Support</h4>
          <List link inverted>
            <List.Item as='a'>FAQs</List.Item>
            <List.Item as='a'>Help</List.Item>
            <List.Item as='a'>Contact Us</List.Item>
          </List>
        </Grid.Column>

        <Grid.Column>
          <h4>Stay Connected</h4>
          <List horizontal link inverted>
            <List.Item as='a' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Icon name="facebook f" size="large" />
            </List.Item>
            <List.Item as='a' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Icon name="twitter" size="large" />
            </List.Item>
            <List.Item as='a' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size="large" />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      DEV@Deakin 2022 — Privacy Policy | Terms | Code of Conduct
    </div>
  </div>
);

export default Footer;
