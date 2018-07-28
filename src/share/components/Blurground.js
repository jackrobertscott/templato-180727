import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';
import { Icon } from '@blueprintjs/core';
import logo from '../assets/icon-left-font-monochrome-black.svg';
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
  overflow: hidden;
  display: flex;
`;

const Dark = styled.div`
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
  padding: 30px;
  color: ${colors.GREY4};
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 32px;
`;

const Subheading = styled.div`
  font-size: 12px;
  color: ${colors.GREY3};
  margin-top: -8px;
  margin-left: 36px;
  margin-bottom: 60px;
`;

const Contents = styled.div`
  margin-top: auto;
`;

const GistLogo = styled.img`
  height: 20px;
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
          1. Login or create a GitHub account.{'\n'}
          2. Go to your{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gist.github.com/"
          >
            GitHub Gists
          </a>.{'\n'}
          3. Create a Gist using {'{{squiggly}}'} braces for variables.{'\n'}
          4. Paste the Gist id over there{' '}
          <Icon icon="arrow-right" style={{ marginTop: '7px' }} />
          {'\n'}
          5. Press continue.
        </Instructions>
        <Not>We are not associated with GitHub.</Not>
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
