import styled from 'styled-components';
import media from 'styled-media-query';
import colors from 'colors-simple';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: ${colors.RED3};
  color: ${colors.WHITE};
  z-index: 1000;
  line-height: 1.6em;
  ${media.greaterThan('medium')`
    display: none;
  `};
  a {
    text-decoration: underline;
    color: inherit;
  }
`;
