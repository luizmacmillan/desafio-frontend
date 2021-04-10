import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const APanelHeader = ({ userName }) => {
  const [logoutMenu, setLogoutMenu] = useState(false);

  const extractInitials = (userName) => {
    const userNameArray = userName.split(' ');
    const userFirstName = userNameArray[0];
    const userLastName = userNameArray[userNameArray.length - 1];

    return userFirstName[0] + userLastName[0];
  };

  const handleLogoutMenu = () => {
    setLogoutMenu(!logoutMenu);
  };

  const renderLogoutMenu = () => {
    return (
      <button type="button">
        Logout
      </button>
    );
  };

  return (
    <div>
      <button type="button" onClick={ handleLogoutMenu }>
        { extractInitials(userName) }
      </button>
      { logoutMenu && renderLogoutMenu() }
      <button>New</button>
      <p>Favoritas</p>
      <p>Quantidade de mensagens favoritadas</p>
    </div>
  );
};

APanelHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ LoginReducer: { userName } }) => ({
  userName,
});

export default connect(mapStateToProps)(APanelHeader);
