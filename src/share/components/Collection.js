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

const Message = styled.div`
  font-size: 14px;
  color: ${colors.GREY4};
  margin-top: 10px;
  line-height: 1.6em;
`;

const Collection = ({ children, message }) => (
  <Background>
    {message && <Message>{message}</Message>}
    {children}
  </Background>
);

Collection.propTypes = {
  children: PropTypes.any.isRequired,
  message: PropTypes.string,
};

Collection.defaultProps = {
  message: null,
};

export default Collection;
