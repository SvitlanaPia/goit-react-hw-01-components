import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: ${props => {
    return `${props.theme.colors.white}`;
  }};
  width: 300px;
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  border-radius: 5px;
`;

export const ProfileDescription = styled.div`
  padding: 40px;
`;

export const Avatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 35px;
  border-radius: 50%;
  border: 1px solid
    ${props => {
      return `${props.theme.colors.mainText}`;
    }};
`;

export const UserName = styled.p`
  color: ${props => {
    return `${props.theme.colors.mainText}`;
  }};
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
`;

export const UserInfo = styled.p`
  color: ${props => {
    return `${props.theme.colors.text}`;
  }};
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    return `${props.theme.colors.background}`;
  }};
`;

export const StatsList = styled.li`
  display: flex;
  width: calc(33.3333%);
  flex-direction: column;
  align-items: center;
  border-top: 1px solid
    ${props => {
      return `${props.theme.colors.border}`;
    }};
  padding-top: 30px;
  padding-bottom: 30px;

  &:not(:last-child) {
    border-right: 1px solid
      ${props => {
        return `${props.theme.colors.border}`;
      }};
  }
`;

export const Label = styled.span`
  color: ${props => {
    return `${props.theme.colors.text}`;
  }};
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  color: ${props => {
    return `${props.theme.colors.mainText}`;
  }};
  font-weight: 700;
`;
