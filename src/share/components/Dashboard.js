import styled from 'styled-components';
import colors from 'colors-simple';

export default styled.div`
  background-color: ${colors.WHITE};
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  & > * {
    min-width: 50%;
    flex-grow: 1;
  }
`;
