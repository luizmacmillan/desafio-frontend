import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AccountCard from './AccountCard';

export const Accounts = (props) => {
  return (
    <div>
      <AccountCard />
    </div>
  );
};

Accounts.propTypes = {
  props: PropTypes
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
