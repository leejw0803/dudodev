import styled, { withTheme } from "styled-components";

const Typography = styled.div`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : "white"};
  line-height: 1.5;
  white-space: pre-wrap;
  z-index: inherit;
  overflow: hidden;

  ${(props) =>
    props.pointer &&
    `
      cursor: pointer;
    `}

  ${(props) =>
    props.center &&
    `
      text-align: center;
    `}
  ${(props) =>
    props.underline &&
    `
      text-decoration: underline;
    `}

  ${(props) =>
    props.landing &&
    `
      font-size: 6rem;
      font-weigth: bold;  
    `}

  ${(props) =>
    props.large &&
    `
      font-size: 2rem;
      font-weight: normal;
      font-style: normal;
    `}

  ${(props) =>
    props.title1 &&
    `
      font-size: 1.5rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.title2 &&
    `
      font-size: 1.5rem;
      font-weight: normal;
    `}

  ${(props) =>
    props.title3 &&
    `
      font-size: 1rem;
      font-weight: normal;
    `}

  ${(props) =>
    props.content1 &&
    `
      font-size: 0.75rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.content2 &&
    `
      font-size: 0.75rem;
      font-weight: normal;
    `}

  ${(props) =>
    props.header &&
    `
      font-size: 1rem;
      font-weight: normal;
    `}
`;

export default withTheme(Typography);
