import React from 'react';
import PropTypes from 'prop-types';
import { ago } from '../../lib/time-helpers';

const TimeAgo = ({ timestamp }) => {
  return <div className="time-ago">
    { ago(timestamp) }
  </div>;
};

TimeAgo.propTypes = {
  timestamp: PropTypes.string
};

export default TimeAgo;
