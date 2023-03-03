import styled from 'styled-components';

export const TransactionTable = styled.table`
  min-width: 600px;
  border: 1px solid
    ${props => {
      return `${props.theme.colors.border}`;
    }};
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px solid red;
  border-radius: 10px;
  overflow: hidden;
`;

export const Head = styled.th`
  color: ${props => {
    return `${props.theme.colors.white}`;
  }};
  background-color: ${props => {
    return `${props.theme.colors.tableBg}`;
  }};
  text-transform: uppercase;
  padding: 20px;
  min-width: 230px;

  &:not(:last-child) {
    border-right: 1px solid
      ${props => {
        return `${props.theme.colors.border}`;
      }};
  }
`;

export const TableList = styled.tr`
  color: ${props => {
    return `${props.theme.colors.text}`;
  }};
  text-align: center;
  font-size: 20px;

  &:nth-child(odd) {
    background-color: ${props => {
      return `${props.theme.colors.white}`;
    }};
  }
  &:nth-child(even) {
    background-color: ${props => {
      return `${props.theme.colors.background}`;
    }};
  }
`;

const tdStyles = `
  padding-top: 13px;
  padding-bottom: 13px;
`;

export const Type = styled.td`
  ${tdStyles}
  text-transform: capitalize;

  border-right: 1px solid
    ${props => {
      return `${props.theme.colors.border}`;
    }}; ;
`;

export const Amount = styled.td`
  ${tdStyles}
  border-right: 1px solid
    ${props => {
    return `${props.theme.colors.border}`;
  }}; ;
`;

export const Currency = styled.td`
  ${tdStyles}
`;
