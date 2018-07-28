import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'colors-simple';
import { Button, ButtonGroup } from '@blueprintjs/core';

const Background = styled.div`
  background-color: ${colors.GREY0};
  border-top: 1px solid ${colors.GREY1};
  color: ${colors.GREY5};
  padding: 20px 30px;
  margin-top: auto;
`;

const Pages = ({ pages, handleDownload, handleClearSaved }) => (
  <Background>
    <p>Files:</p>
    <ul>
      {pages.map(save => (
        <li key={save.created}>
          {save.created}: {save.renders.map(({ name }) => name).join(', ')}
        </li>
      ))}
    </ul>
    <ButtonGroup>
      <Button onClick={() => handleDownload()}>Download</Button>
      <Button onClick={() => handleClearSaved()}>Reset Files</Button>
    </ButtonGroup>
  </Background>
);

Pages.propTypes = {
  handleClearSaved: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      created: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Pages;
