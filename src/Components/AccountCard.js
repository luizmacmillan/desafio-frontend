import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MinimizedIcon from './MinimizedIcon.svg';

const AccountCard = ({ menuName, subMenus }) => {
  return (
    <div>
      <img src={ MinimizedIcon } alt="expand-icon" width="20px" />
      <p>{ menuName }</p>
      <p>Quantidade de emails total</p>
      <p>Quantidade de emails no subMenu</p>
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
