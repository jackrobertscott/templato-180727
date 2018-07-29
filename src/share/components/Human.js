import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';
import { Button } from '@blueprintjs/core';
import logo from '../assets/icon-left-font-monochrome-black.svg';

const Background = styled.div`
  background-color: ${colors.CLOUDS1};
  border-right: 1px solid ${colors.GREY1};
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const Head = styled.div`
  background-color: ${colors.GREY0};
  border-bottom: 1px solid ${colors.GREY1};
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const Brand = styled.div`
  margin-right: auto;
`;

const Logo = styled.img`
  height: 30px;
`;

const Subheading = styled.div`
  font-size: 12px;
  color: ${colors.GREY3};
  margin-top: -8px;
  margin-left: 36px;
`;

const Foot = Head.extend`
  border: none;
  border-top: 1px solid ${colors.GREY1};
  color: ${colors.GREY3};
  font-size: 12px;
  flex-shrink: 0;
`;

const RepoLink = styled.a`
  color: ${colors.BLACK};
  text-decoration: underline;
  margin: 0 4px;
`;

const TwitterLink = styled.a`
  color: #1da1f2;
  text-decoration: underline;
  margin: 0 4px;
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Me = styled.span`
  font-size: 20px;
  line-height: 0;
  margin-left: auto;
`;

const Human = ({ children, handleReset }) => (
  <Background>
    <Head>
      <Brand>
        <Logo src={logo} alt="Templato" />
        <Subheading>Generate code fast using GitHub Gists</Subheading>
      </Brand>
      <Button rightIcon="git-repo" onClick={() => handleReset()}>
        Change Gist
      </Button>
    </Head>
    <Main>{children}</Main>
    <Foot>
      Feel free to
      <RepoLink
        target="_blank"
        href="https://github.com/jackrobertscott/templato"
      >
        star this repo
      </RepoLink>{' '}
      or{' '}
      <TwitterLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/thejackscott"
      >
        follow me on twitter
      </TwitterLink>{' '}
      to see what else I work on.
      <Me>
        <span role="img" aria-label="me">
          👨‍💻
        </span>
      </Me>
    </Foot>
  </Background>
);

Human.propTypes = {
  children: PropTypes.any.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Human;
