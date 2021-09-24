import styled, { css } from 'styled-components';

interface MarginTypes {
  size: number;
  row?: boolean;
}

const Margin = styled.div<MarginTypes>`
  height: calc(${props => props.size} * 0.5rem);
  ${props =>
    props.row &&
    css`
      height: 0;
      width: calc(${props.size} * 0.5rem);
    `}

  @media (max-width: 768px) {
    height: calc(${props => props.size} * 0.125rem);
    ${props =>
      props.row &&
      css`
        height: 0;
        width: calc(${props.size} * 0.125rem);
      `}
  }
`;

export default Margin;
