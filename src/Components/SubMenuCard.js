import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectAccount } from '../Redux/Actions/AccountsActions';

const SubMenuCard = ({
  accountId,
  subMenuId,
  name,
  subMenuItems,
  dispatchSelectAccount,
}) => {
  return (
    <div onClick={ () => dispatchSelectAccount({ accountId, subMenuId, name }) }>
      <p>{ name }</p>
      <p>{ subMenuItems.length }</p>
    </div>
  );
};

SubMenuCard.propTypes = {
  accountId: PropTypes.number.isRequired,
  subMenuId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  subMenuItems: PropTypes.instanceOf(Array).isRequired,
  dispatchSelectAccount: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSelectAccount: ({
    accountId,
    subMenuId,
    name,
  }) => dispatch(selectAccount({ accountId, subMenuId, name })),
});

export default connect(null, mapDispatchToProps)(SubMenuCard);
