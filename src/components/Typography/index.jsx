import styled, { withTheme } from "styled-components";

const Typography = styled.div`
  color: ${props => props.color ? props.theme.colors[props.color] : 'white'};
  line-height: 1.5;
  white-space: pre-wrap;
  z-index: inherit;
  text-overflow: ellipsis;
  overflow: hidden;

  ${props =>
    props.center &&
    `
      text-align: center;
    `}
  ${props =>
    props.underline &&
    `
      text-decoration: underline;
    `}

  ${props => 
    props.landing &&
    `
      font-size: 6rem;
      font-weigth: bold;  
    `}

  ${props =>
    props.large &&
    `
      font-size: 3rem;
      font-weigth: 400;
    `}

  
`;

export default withTheme(Typography);

