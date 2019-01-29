import React from 'react';

import Button from '../components/Button';
import Navigation from '../components/Navigation';

const Home = props => {
  return (
    <div>
      <Navigation />
      <Button>Wrapped</Button>
    </div>
  );
};

export default Home;
