import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AccountCard from './AccountCard';

const Accounts = ({ menus, isFetching }) => {
  return (
    <div>
      { isFetching ? <h3>Loading</h3> : menus.map((menu) => (
        <AccountCard />
      )) }
    </div>
  );
};

Accounts.propTypes = {
  menus: PropTypes.arrayOf.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ AccountsReducer: { menus, isFetching } }) => ({
  menus,
  isFetching,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
