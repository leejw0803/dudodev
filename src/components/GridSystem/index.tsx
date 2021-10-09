import styled, { css } from 'styled-components';

interface ColTypes {
  size?: number;
  center?: boolean;
  end?: boolean;
}

interface RowTypes {
  justify?: string;
  align?: string;
}

interface ContainerTypes {
  row?: boolean;
  column?: boolean;
  center?: boolean;
  cover?: boolean;
}

export const Grid = styled.div`
  width: ${props => props.theme.grid.width};
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Col = styled.div<ColTypes>`
  width: auto;
  display: flex;
  flex-direction: column;

  ${props =>
    props.size &&
    css`
      width: calc(
        (100% - ${props.theme.grid.gutter} * ${props.theme.grid.columnSize - 1}) /
          ${props.theme.grid.columnSize} * ${props.size} +
          ${props.theme.grid.gutter} * ${props.size - 1}
      );
    `}

  ${props =>
    props.center &&
    `
    justify-content: center;
  `}

  ${props =>
    props.end &&
    css`
      justify-content: flex-end;
    `}
`;

export const Row = styled.div<RowTypes>`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${props =>
    props.justify &&
    `
    justify-content: ${props.justify};
  `}

  ${props =>
    props.align &&
    `
    align-items: ${props.align};
  `}

  ${Col} ~ ${Col} {
    margin-left: ${props => props.theme.grid.gutter};
  }
`;

export const Container = styled.div<ContainerTypes>`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${props =>
    props.row &&
    `
    flex-direction: row;
  `}

  ${props =>
    props.column &&
    `
    flex-direction: column;
  `}

  ${props =>
    props.center &&
    `
    align-items: center;
  `}

  ${props =>
    props.cover &&
    `
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}
`;
