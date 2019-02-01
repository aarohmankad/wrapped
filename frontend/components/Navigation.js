import React from 'react';

import Link from './Link';
import SignoutButton from './Button/SignoutButton';
import ROUTES from '../constants/ROUTES';

export default () => (
  <div>
    <ul>
      {Object.keys(ROUTES).map(route => (
        <li key={route}>
          <Link href={ROUTES[route].path}>{ROUTES[route].text}</Link>
        </li>
      ))}
      <li>
        <SignoutButton />
      </li>
    </ul>
  </div>
);
