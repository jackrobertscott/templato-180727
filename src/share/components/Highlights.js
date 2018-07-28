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

const Heading = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid ${colors.GREY1};
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Meta = styled.div`
  font-size: 12px;
  color: ${colors.GREY3};
  margin-top: 6px;
`;

const Code = styled(SyntaxHighlighter).attrs({
  style: github,
  showLineNumbers: true,
})`
  margin: 0;
  padding: 20px;
`;

const Blurground = ({ files }) => (
  <Background>
    {files.map(({ filename, content, language, size }) => (
      <File key={filename}>
        <Heading>
          <Name>{filename}</Name>
          <Meta>
            {language} - {size} characters
          </Meta>
        </Heading>
        <Code>{content}</Code>
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
