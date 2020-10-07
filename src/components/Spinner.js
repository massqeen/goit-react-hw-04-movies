import React from 'react';
import { css } from '@emotion/core';
import SyncLoader from 'react-spinners/PacmanLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <SyncLoader
          css={override}
          size={15}
          margin={2}
          color={'#303f9f'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default Spinner;
