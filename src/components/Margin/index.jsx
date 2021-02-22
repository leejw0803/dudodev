import styled, { css } from 'styled-components';

export const Margin = styled.div`
  height: calc(${props => props.size} * 0.5rem);
  ${props =>
    props.row &&
    css`
      height: 0;
      width: calc(${props => props.size} * 0.5rem);
    `}
`;