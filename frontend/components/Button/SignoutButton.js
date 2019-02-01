import React from 'react';
import { withFirebase } from '../Firebase';

const SignoutButton = ({ firebase }) => (
  <button onClick={firebase.doSignOut}> Sign Out</button>
);

export default withFirebase(SignoutButton);
