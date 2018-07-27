import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';

const Background = styled.div`
  background-color: ${colors.WHITE};
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
`;

const Utilities = styled.div`
  min-width: 50%;
  flex-grow: 1;
  border-right: 1px solid ${colors.GREY0};
`;

const Files = styled.div`
  min-width: 50%;
  flex-grow: 1;
`;

const Blurground = ({ children }) => (
  <Background>
    <Utilities />
    <Files>{children}</Files>
  </Background>
);

Blurground.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Blurground;
