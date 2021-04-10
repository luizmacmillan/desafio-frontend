import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import APanel from '../Components/APanel';
import API from '../Services/API';

const MainPage = ({ dispatchAccountsMenus }) => {
  useEffect(() => {
    dispatchAccountsMenus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <APanel />
    </div>
  );
};

// MainPage.propTypes = {
  
// };

const mapDispatchToProps = (dispatch) => ({
  dispatchAccountsMenus: () => dispatch(API.getAccountsMenus()),
});

export default connect(null, mapDispatchToProps)(MainPage);
