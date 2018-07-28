import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';

const Background = styled.div`
  background-color: ${colors.WHITE};
  padding: 20px 30px;
  overflow: auto;
`;

const Collection = ({ children }) => <Background>{children}</Background>;

Collection.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Collection;
