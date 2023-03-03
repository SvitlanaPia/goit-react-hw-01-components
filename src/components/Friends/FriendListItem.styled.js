import styled from 'styled-components';

export const Item = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  background-color: ${props => {
    return `${props.theme.colors.white}`;
  }};
  padding: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border: 1px solid
    ${props => {
      return `${props.theme.colors.border}`;
    }};
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${props => {
    return `${props.theme.colors.mainText}`;
  }};
`;
