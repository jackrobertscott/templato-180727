import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';

const Background = styled.div`
  background-color: ${colors.GREY0};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
`;

const Blurground = ({ children }) => (
  <Background>
    <h1>Templato</h1>
    <p>Please enter a GitHub Gist id.</p>
    <br />
    {children}
  </Background>
);

Blurground.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Blurground;
