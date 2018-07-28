import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';

const Background = styled.div`
  background-color: ${colors.CLOUDS2};
  padding: 20px 30px;
  overflow: auto;
  flex-grow: 1;
  hr {
    border: none;
    border-bottom: 1px solid ${colors.CLOUDS6};
    margin: 30px 0;
  }
`;

const Collection = ({ children }) => <Background>{children}</Background>;

Collection.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Collection;
