import React from 'react';

import ActionButton from '../components/Button/ActionButton';
import Navigation from '../components/Navigation';

const Home = props => {
  return (
    <div>
      <Navigation />
      <ActionButton>Wrapped</ActionButton>
    </div>
  );
};

export default Home;
