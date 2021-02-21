import styled from "styled-components";

const Typography = styled.div`
  color: ${props => props.color ? props.color : 'white'};
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
    props.large &&
    `
      font-size: 8rem;
      font-weigth: bold;  
    `}

  
`;

export default Typography;

