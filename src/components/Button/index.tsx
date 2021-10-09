import styled, { css, withTheme } from 'styled-components';

type ButtonProps = {
  round?: boolean;
  giant?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  white?: boolean;
  simple?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
  color?: string;
};

const Button = styled.button<ButtonProps>`
  position: relative;
  height: 48px;
  width: 242px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.yellow300};
  z-index: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  ${props =>
    props.round &&
    css`
      border-radius: 24px;
    `}

  ${props =>
    props.giant &&
    css`
      width: ${props.theme.sizes.giant.width};
      height: ${props.theme.sizes.giant.height};
      font-size: ${props.theme.sizes.giant.fontSize};
    `};

  ${props =>
    props.large &&
    css`
      width: ${props.theme.sizes.large.width};
      height: ${props.theme.sizes.large.height};
      font-size: ${props.theme.sizes.large.fontSize};
    `};

  ${props =>
    props.medium &&
    css`
      width: ${props.theme.sizes.medium.width};
      height: ${props.theme.sizes.medium.height};
      font-size: ${props.theme.sizes.medium.fontSize};
    `};

  ${props =>
    props.small &&
    css`
      width: ${props.theme.sizes.small.width};
      height: ${props.theme.sizes.small.height};
      font-size: ${props.theme.sizes.small.fontSize};
    `};

  ${props =>
    props.tiny &&
    css`
      width: ${props.theme.sizes.tiny.width};
      height: ${props.theme.sizes.tiny.height};
      font-size: ${props.theme.sizes.tiny.fontSize};
    `};

  ${props =>
    props.white &&
    css`
      background-color: ${props.theme.colors.white};
      color: ${props.theme.colors.gray900};
      border: none;
    `};

  ${props =>
    props.simple &&
    css`
      background-color: ${props.theme.colors.white};
      color: ${props.theme.colors.gray900};
      border: 1px solid ${props.theme.colors.gray900};
    `};

  ${props =>
    props.primary &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.onPrimary};
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.colors.secondary};
      color: ${props.theme.colors.onSecondary};
    `}

  ${props =>
    props.tertiary &&
    css`
      background-color: ${props.theme.colors.tertiary};
      color: ${props.theme.colors.onTertiary};
      border: 1px solid ${props.theme.colors.border};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.simple
        ? props.theme.colors.white
        : props.theme.colors.disabled};
      color: ${props.simple
        ? props.theme.colors.gray400
        : props.theme.colors.onDisabled};
      border: 1px solid
        ${props.simple ? props.theme.colors.gray400 : props.theme.colors.border};
      cursor: default;
    `}

  ${props =>
    props.color &&
    css`
      color: ${props.theme.colors[props.color]};
    `}
`;

export default withTheme(Button);
