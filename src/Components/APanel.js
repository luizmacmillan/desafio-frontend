import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AccountCard from './AccountCard';
import APanelHeader from './APanelHeader';

const APanel = ({ menus, isFetching }) => {
  return (
    <div>
      <APanelHeader />
      {
        isFetching
        ? <h2>Loading...</h2>
        : menus.map(({ id, name, subMenus }) => (
          <AccountCard
            id={ id }
            name={ name }
            subMenus={ subMenus }
          />
        ))
      }
    </div>
  );
};

APanel.propTypes = {
  props: PropTypes
};

const mapStateToProps = ({ AccountsReducer: { menus, isFetching } }) => ({
  menus,
  isFetching,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(APanel);
