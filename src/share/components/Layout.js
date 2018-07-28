import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  ${props =>
    props.row &&
    css`
      align-items: center;
    `};
`;
