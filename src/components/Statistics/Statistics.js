import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({title, stats}) {
  return (
    <section className={style.section}>
      {title && <h2 className={style.title}>Upload stats</h2>}
      <ul className={style.statlist}> 
        {stats.map( stat => (
          <li key={stat.id} className={style.item}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>)
        )}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Statistics;