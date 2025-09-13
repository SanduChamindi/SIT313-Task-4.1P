import React from 'react';
import { Input, Segment } from 'semantic-ui-react';

function Newsletter() {
  return (
    <Segment textAlign='center' style={{ marginTop: '30px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap' 
      }}>
        <h4 style={{ margin: 0 }}>SIGN UP FOR OUR DAILY INSIDER</h4>
        <Input
          action={{ content: 'Subscribe', color: 'teal' }}
          placeholder='Enter your email'
          style={{ width: '300px' }}
        />
      </div>
    </Segment>
  );
}

export default Newsletter;
