import React from 'react';

import ActionButton from '../components/Button/ActionButton';
import Input from '../components/Input';
import Navigation from '../components/Navigation';

import LoginBackground from '../components/LoginBackground';

const Signin = props => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Navigation />
      <LoginBackground />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <ActionButton>Login</ActionButton>
      </div>
    </div>
  );
};

export default Signin;
