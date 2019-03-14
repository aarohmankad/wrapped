import React from 'react';
import router from 'next/router';

import { withFirebase } from '../Firebase';
import ROUTES from '../../constants/ROUTES';

const SignoutButton = props => (
  <button
    onClick={() => {
      props.firebase.doSignOut();
      router.push(ROUTES.HOME.path);
    }}
    {...props}
  >
    {' '}
    Sign Out
  </button>
);

export default withFirebase(SignoutButton);
