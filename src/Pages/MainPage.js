import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import API from '../Services/API';

const MainPage = ({ dispatchAccountsMenus }) => {
  useEffect(() => {
    dispatchAccountsMenus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      teste
    </div>
  );
};

MainPage.propTypes = {
  menus: PropTypes.any.isRequired
};

const mapStateToProps = ({ AccountsReducer: { menus } }) => ({
  menus,
});


const mapDispatchToProps = (dispatch) => ({
  dispatchAccountsMenus: () => dispatch(API.getAccountsMenus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
