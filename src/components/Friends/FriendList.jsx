import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friend>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </Friend>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
