import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const style = { textDecoration: 'none', fontSize: '16px', color: '#3f51b5' };
const Navigation = () => (
  <>
    <ul style={{ display: 'flex' }}>
      <li>
        <Button
          variant="outlined"
          color="default"
          style={{ marginRight: '10px', backgroundColor: '#f0f0f0' }}
        >
          <NavLink style={style} to="/" exact activeStyle={{ color: 'red' }}>
            Home
          </NavLink>
        </Button>
      </li>
      <li>
        <Button
          variant="outlined"
          color="primary"
          style={{ backgroundColor: '#f0f0f0' }}
        >
          <NavLink
            to="/movies"
            exact
            style={style}
            activeStyle={{ color: 'red' }}
          >
            Movies
          </NavLink>
        </Button>
      </li>
    </ul>
    <Divider style={{ margin: '16px' }} />
  </>
);

export default Navigation;
