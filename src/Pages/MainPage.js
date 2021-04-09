import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import API from '../Services/API';

export const MainPage = ({ dispatchAccountsSubMenus }) => {
  useEffect(() => {
    dispatchAccountsSubMenus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      teste
    </div>
  );
};

MainPage.propTypes = {
  props: PropTypes
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAccountsSubMenus: () => dispatch(API.getAccountsSubMenus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
