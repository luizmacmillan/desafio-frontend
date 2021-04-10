import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Accounts from './Accounts';
import APanelHeader from './APanelHeader';

const APanel = (props) => {
  return (
    <div>
      <APanelHeader />
      <Accounts />
    </div>
  );
};

APanel.propTypes = {
  props: PropTypes
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(APanel);
