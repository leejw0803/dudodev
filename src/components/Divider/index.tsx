import styled, { withTheme } from 'styled-components';

interface DividerTypes {
  row: boolean;
}

export const Divider = withTheme(styled.div<DividerTypes>`
  width: ${props => (props.row ? '0.25rem' : '100%')};
  height: ${props => (props.row ? '100%' : '0.25rem')};
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`);
