import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 400px;
  background-color: ${props => {
    return `${props.theme.colors.white}`;
  }};
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${props => {
    return `${props.theme.colors.text}`;
  }};
  font-weight: 600;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const ItemList = styled.li`
  display: flex;
  width: calc(20%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => {
    return `${props.color}`;
  }};
`;

export const Label = styled.span`
  color: ${props => {
    return `${props.theme.colors.white}`;
  }};
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  color: ${props => {
    return `${props.theme.colors.white}`;
  }};
  font-weight: 600;
  font-size: 20px;
`;
