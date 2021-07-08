import React from 'react';
import PropTypes from 'prop-types';
import '../statistics/Statistic.css';

const StatisticItem = ({ id, label, percentage }) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </>
);

StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd', '.pdf']),
  percentage: PropTypes.number,
};

export default StatisticItem;
