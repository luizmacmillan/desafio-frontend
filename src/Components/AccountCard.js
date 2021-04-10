import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MinimizedIcon from '../Assets/MinimizedIcon.svg';
import ExpandedIcon from '../Assets/ExpandedIcon.svg';

const AccountCard = ({ id, name, subMenus }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div key={ id }>
      <input
        type="image"
        src={ expanded ? ExpandedIcon : MinimizedIcon }
        alt="expand-icon"
        onClick={ () => setExpanded(!expanded) }
        width="20px"
        height="20px"
      />
      <p>{ name }</p>
      <p>{ subMenus.reduce((acc, curr) => acc + curr.subMenuItems.length, 0) }</p>
      { expanded && subMenus.map((subMenu) => (
        <div key={ subMenu.id }>
          <p>{ subMenu.name }</p>
          <p>{ subMenu.subMenuItems.length }</p>
        </div>
      )) }
    </div>
  );
};

AccountCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  subMenus: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);
