import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageCard from './MessageCard';
// import SearchBar from './SearchBar';

const BPanel = ({ menus, selectedAccount: { accountId, subMenuId, name }, isFetching }) => {
  const renderMessageCards = () => {
    if (!accountId || !subMenuId) return (<h2>Selecione a conta desejada.</h2>);

    return (
      menus
        .find((menu) => menu.id === accountId).subMenus
        .find((subMenu) => subMenu.id === subMenuId).subMenuItems
        .map((item) => <MessageCard item={ item } name={ name } key={ item.id } />)
    );
  };

  return (
    isFetching
    ? <h2>Loading...</h2>
    : <div>
      {/* <SearchBar /> */}
      { renderMessageCards() }
    </div>
  );
};

BPanel.propTypes = {
  menus: PropTypes.instanceOf(Array).isRequired,
  selectedAccount: PropTypes.instanceOf(Object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ AccountsReducer: { menus, selectedAccount, isFetching } }) => ({
  menus,
  isFetching,
  selectedAccount,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(BPanel);
