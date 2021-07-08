import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';
import '../statistics/Statistic.css';
import createRandomColor from '../randomColor';

const Statistic = ({ title, stats }) => (
  <section className="Statistic__section">
    <div className="Statistic_container">
      {title && <h2 className="Statistic__title">{title}</h2>}
    </div>

    <ul className="Statistic__stats">
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className="Statistic__option"
          style={{ backgroundColor: createRandomColor() }}
        >
          <StatisticItem id={id} label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

// Statistic.default.Props = {
//   title: '',
// };

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default Statistic;
