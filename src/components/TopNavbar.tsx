// components/TopNavbar/TopNavbar.tsx
import React from "react";
import { FaBars, FaHome, FaChevronRight } from "react-icons/fa";
import { ConnectButton } from "@razorlabs/razorkit";

interface TopNavbarProps {
  onMenuClick: () => void;
  isMobile?: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ onMenuClick }) => {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={onMenuClick}>
          <FaBars />
        </button>

        {/* Mobile Breadcrumb */}
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <FaHome />
            <span>Home</span>
          </div>
          <FaChevronRight className="breadcrumb-separator" />
          <div className="breadcrumb-item">
            <span className="breadcrumb-current">Dashboard</span>
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <ConnectButton>Connect Wallet </ConnectButton>
      </div>
    </div>
  );
};

export default TopNavbar;
