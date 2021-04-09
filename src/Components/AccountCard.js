import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const AccountCard = ({ name, subMenus }) => {
  return (
    <div>
      <img src={} alt="expand-icon" width="20px" />
    </div>
  );
};

AccountCard.propTypes = {
  props: PropTypes
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
