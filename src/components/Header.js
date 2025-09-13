import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

function Navbar() {
  return (
    <Menu>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item><Button basic>Post</Button></Menu.Item>
        <Menu.Item><Button primary>Login</Button></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
