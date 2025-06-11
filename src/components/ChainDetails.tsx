// components/ChainDetails/ChainDetails.tsx
import React from 'react';
import { FaWallet, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const ChainDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default values if no state is passed
  const {
    chainName = "Osmosis Support Lab",
    description = "Community-funded support DAO",
    establishedDate = "August 2023",
    treasuryValue = "$63.76K est. USD value",
    memberCount = 9
  } = location.state || {};

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="chain-details">
      {/* Breadcrumb navigation */}
      <div className="breadcrumb">
        <span className="breadcrumb-item" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
          Home
        </span>
        <span className="breadcrumb-divider">&gt;</span>
        <span className="breadcrumb-item active">{chainName}</span>
      </div>

      {/* Chain header */}
      <div className="chain-header">
        <h1>{chainName}</h1>
        <p className="chain-description">{description}</p>
      </div>

      {/* Navigation tabs */}
      <div className="chain-tabs">
        <button className="tab active">Home</button>
        <button className="tab">Proposals</button>
        <button className="tab">Treasury</button>
        
      </div>

      {/* Membership section */}
      <div className="membership-section">
        <h2>Membership</h2>
        <div className="login-prompt">
          <p>Log in to view your membership status in the DAO.</p>
          <button className="login-button">
            Log in
          </button>
        </div>
      </div>

      {/* Details section */}
      <div className="details-section">
        <h2>Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <div className="detail-icon">
              <FaCalendarAlt />
            </div>
            <div>
              <div className="detail-label">Established</div>
              <div className="detail-value">{establishedDate}</div>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <FaWallet />
            </div>
            <div>
              <div className="detail-label">Treasury</div>
              <div className="detail-value">{treasuryValue}</div>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <FaUsers />
            </div>
            <div>
              <div className="detail-label">Members</div>
              <div className="detail-value">{memberCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainDetails;