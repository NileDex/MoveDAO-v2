// components/StatsCards/StatsCards.tsx
import React from 'react';
import { FaGlobe, FaFileAlt, FaVoteYea, FaUsers, FaLock, FaLink } from 'react-icons/fa';

const StatsCards: React.FC = () => {
  const stats = [
    { icon: <FaGlobe />, label: 'DAOs', value: '6,013' },
    { icon: <FaFileAlt />, label: 'Proposals', value: '23,554' },
    { icon: <FaVoteYea />, label: 'Votes cast', value: '516,828' },
    { icon: <FaUsers />, label: 'Unique voters', value: '41,112' },
    { icon: <FaLock />, label: 'TVL', value: '$58,628,642.84' },
    { icon: <FaLink />, label: 'Chains', value: '12' }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-content">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
