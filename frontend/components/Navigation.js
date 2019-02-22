import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Link from './Link';
import SignoutButton from './Button/SignoutButton';
import ROUTES from '../constants/ROUTES';

const List = styled.ul`
  position: absolute;
  z-index: 10;
  top: 25px;
  right: 0px;
  list-style-type: none;
  float: right;
  & > li {
    display: inline;
    margin: 50px;
    font-size: 28px;
    font-weight: bold;

    & > a {
      color: black;
      text-decoration: none;

      &:hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;

const Navigation = ({ user }) =>
  !user ? (
    <div>
      <List>
        <li>
          <Link href={ROUTES.HOME.path}>{ROUTES.HOME.text}</Link>
        </li>
        <li>
          <Link href={ROUTES.SIGN_UP.path}>{ROUTES.SIGN_UP.text}</Link>
        </li>
        <li>
          <Link href={ROUTES.SIGN_IN.path}>{ROUTES.SIGN_IN.text}</Link>
        </li>
      </List>
    </div>
  ) : (
    <div>
      <List>
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
      </List>
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
