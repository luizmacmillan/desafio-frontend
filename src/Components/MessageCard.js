import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MessageCard = ({ item: {name, owner, subject, users }, name: subMenuName }) => {
  const currentHour = () => {
    return `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;
  }

  return (
    <div>
      <div>
        <p>{ owner }</p>
      </div>
      <div>
        <p>{ name }</p>
        <p>{ subject }</p>
        <p>{ subMenuName }</p>
      </div>
      <div>
        <p>Ontem, 11:33</p>
        <p>{ currentHour() }</p>
        { users.map((user) => <p key={ user }>{ user }</p>) }
      </div>
    </div>
  );
};

MessageCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard);
