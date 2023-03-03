import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {
  StatisticsWrapper,
  Title,
  StatList,
  ItemList,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <ItemList key={id} color={randomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ItemList>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
