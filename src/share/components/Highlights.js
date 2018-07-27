import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

const Background = styled.div`
  background-color: ${colors.WHITE};
`;

const File = styled.div`
  flex-grow: 1;
`;

const FileHeading = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${colors.GREY1};
  font-size: 20px;
  font-weight: bold;
`;

const FileCode = styled(SyntaxHighlighter).attrs({
  style: github,
  showLineNumbers: true,
})`
  margin: 0;
  padding: 20px;
`;

const Blurground = ({ files }) => (
  <Background>
    {files.map(({ filename, content }) => (
      <File key={filename}>
        <FileHeading>{filename}</FileHeading>
        <FileCode>{content}</FileCode>
      </File>
    ))}
  </Background>
);

Blurground.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Blurground;
