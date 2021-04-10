import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import APanel from '../Components/APanel';
import API from '../Services/API';

const MainPage = ({ dispatchAccountsMenus, authentication }) => {
  useEffect(() => {
    dispatchAccountsMenus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { !authentication ? (
        <div>
          <h1>Usuário inválido</h1>
          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
        </div>
      ) : (
        <APanel />
      ) }
    </div>
  )
};

MainPage.propTypes = {
  dispatchAccountsMenus: PropTypes.func.isRequired,
  authentication: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ LoginReducer: { authentication } }) => ({
  authentication,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAccountsMenus: () => dispatch(API.getAccountsMenus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
