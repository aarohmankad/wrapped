import React from 'react';
import { connect } from 'react-redux';

import Link from './Link';
import SignoutButton from './Button/SignoutButton';
import ROUTES from '../constants/ROUTES';

const Navigation = ({ user }) =>
  !user ? (
    <div>
      <ul>
        <li>
          <Link href={ROUTES.HOME.path}>{ROUTES.HOME.text}</Link>
        </li>
        <li>
          <Link href={ROUTES.SIGN_UP.path}>{ROUTES.SIGN_UP.text}</Link>
        </li>
        <li>
          <Link href={ROUTES.SIGN_IN.path}>{ROUTES.SIGN_IN.text}</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div>
      <ul>
        <li>
          <Link href={ROUTES.HOME.path}>{ROUTES.HOME.text}</Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD.path}>{ROUTES.DASHBOARD.text}</Link>
        </li>
        <li>
          <Link href={ROUTES.ACCOUNT.path}>{ROUTES.ACCOUNT.text}</Link>
        </li>

        <SignoutButton />
      </ul>
    </div>
  );

const mapStateToProps = ({ auth }, props) => ({
  ...props,
  user: auth.user,
});

export default connect(
  mapStateToProps,
  null
)(Navigation);
