import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';
import { Icon } from '@blueprintjs/core';
import logo from '../assets/icon-above-font.svg';
import gistLogo from '../assets/icon-gist.png';

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

const Box = styled.div`
  border-radius: 3px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GREY1};
  overflow: hidden;
  display: flex;
`;

const Dark = styled.div`
  border-radius: 3px;
  margin: 20px 0 20px 20px;
  padding: 30px;
  background-color: ${colors.WET_ASPHALT7};
  color: ${colors.WET_ASPHALT1};
  max-width: 300px;
  a {
    color: inherit;
    text-decoration: underline;
    transition: 0.2s;
    &:hover {
      color: ${colors.WHITE};
    }
  }
`;

const Light = styled.div`
  width: 400px;
  padding: 30px 60px;
  color: ${colors.GREY4};
  display: flex;
  flex-direction: column;
  text-align: center;
  .bp3-callout {
    text-align: initial;
  }
`;

const Logo = styled.img`
  height: 140px;
  margin-top: -20px;
`;

const Subheading = styled.div`
  font-size: 14px;
  color: ${colors.GREY3};
  margin-bottom: 40px;
  margin-top: -20px;
`;

const Contents = styled.div`
  margin-top: auto;
`;

const GistLogo = styled.img`
  height: 16px;
  filter: invert(100%);
  margin-bottom: 20px;
`;

const Instructions = styled.p`
  line-height: 2em;
  white-space: pre-wrap;
  font-size: 15px;
  margin-bottom: 20px;
`;

const Not = styled.div`
  font-size: 11px;
  color: ${colors.GREY3};
`;

const Blurground = ({ children }) => (
  <Background>
    <Box>
      <Dark>
        <GistLogo src={gistLogo} />
        <Instructions>
          1. Login into GitHub{'\n'}
          2. Go to{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gist.github.com/"
          >
            GitHub Gists
          </a>
          {'\n'}
          3. Create a New Gist{'\n'}
          4. Add{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://twitter.github.io/hogan.js/"
          >
            {'{{squiggly}}'} braces
          </a>
          {'\n'}
          5. Get Gist ID from the URL{'\n'}
          6. Paste Gist ID there{' '}
          <Icon icon="arrow-right" style={{ marginTop: '7px' }} />
          {'\n'}
          7. Click {'"Continue"'}
        </Instructions>
        <Not>This is not associated with GitHub.</Not>
      </Dark>
      <Light>
        <div>
          <Logo src={logo} alt="Templato" />
          <Subheading>Generate code fast using GitHub Gists</Subheading>
        </div>
        <Contents>{children}</Contents>
      </Light>
    </Box>
  </Background>
);

Blurground.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Blurground;
