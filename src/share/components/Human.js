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

const Foot = styled.div`
  background-color: ${colors.GREY0};
  border-top: 1px solid ${colors.GREY1};
  padding: 20px 30px;
  color: ${colors.GREY4};
  box-sizing: border-box;
  font-size: 12px;
  flex-shrink: 0;
  line-height: 2em;
`;

const RepoLink = styled.a`
  color: ${colors.BLACK};
  text-decoration: underline;
`;

const TwitterLink = styled.a`
  color: #1da1f2;
  text-decoration: underline;
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Me = styled.span`
  font-size: 18px;
  padding-left: 4px;
  float: right;
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
      Feel free to{' '}
      <RepoLink
        target="_blank"
        href="https://github.com/jackrobertscott/templato"
      >
        see this repo on GitHub
      </RepoLink>{' '}
      or{' '}
      <TwitterLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jacrobsco"
      >
        follow me on Twitter
      </TwitterLink>{' '}
      to see what else I work on. Remember to bookmark if helpful.
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
