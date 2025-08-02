import React from 'react';
import { Menu, Icon, Input, Container, Button } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

const HeaderBar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navStyle = {
    color: '#004a80',
    fontWeight: '600',
    fontSize: '1.1em',
    transition: 'color 0.3s ease',
    padding: '0.8em 1.2em',
    cursor: 'pointer',
  };

  const activeStyle = {
    ...navStyle,
    color: '#0066cc',
    borderBottom: '3px solid #0066cc',
  };

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #d0e8ff 0%, #a4d4ff 100%)',
        boxShadow: '0 2px 8px rgba(0, 70, 140, 0.2)',
        borderRadius: '0 0 20px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container>
        <Menu secondary stackable style={{ background: 'transparent', padding: '1em 0' }}>
          <Menu.Item as={Link} to="/" header style={{ paddingLeft: '0' }}>
            <Icon name="graduation cap" size="large" color="blue" />
            <span
              style={{
                fontWeight: '700',
                fontSize: '1.5em',
                color: '#003366',
                marginLeft: '0.3em',
                letterSpacing: '1px',
              }}
            >
              DEV@Deakin
            </span>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/"
            style={path === '/' ? activeStyle : navStyle}
            name="Home"
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0066cc')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = path === '/' ? '#0066cc' : '#004a80')
            }
          />
          <Menu.Item
            as={Link}
            to="/tutorials"
            style={path === '/tutorials' ? activeStyle : navStyle}
            name="Tutorials"
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0066cc')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = path === '/tutorials' ? '#0066cc' : '#004a80')
            }
          />
          <Menu.Item
            as={Link}
            to="/articles"
            style={path === '/articles' ? activeStyle : navStyle}
            name="Articles"
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0066cc')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = path === '/articles' ? '#0066cc' : '#004a80')
            }
          />

          <Menu.Menu position="right" style={{ alignItems: 'center' }}>
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                size="small"
                style={{
                  width: '200px',
                  borderRadius: '20px',
                  border: '1.5px solid #a4d4ff',
                  paddingLeft: '1em',
                  boxShadow: '0 2px 5px rgba(164, 212, 255, 0.6)',
                }}
              />
            </Menu.Item>

            <Menu.Item>
              <Button
                as={Link}
                to="/login"
                primary
                size="small"
                style={{
                  borderRadius: '20px',
                  fontWeight: '600',
                  padding: '0.5em 1.4em',
                }}
              >
                Login
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};

export default HeaderBar;
