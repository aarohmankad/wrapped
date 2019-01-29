import React from 'react';

import Link from './Link';
import ROUTES from '../constants/ROUTES';

export default () => (
  <div>
    <ul>
      {Object.keys(ROUTES).map(route => (
        <li key={route}>
          <Link href={ROUTES[route].path}>{ROUTES[route].text}</Link>
        </li>
      ))}
    </ul>
  </div>
);
