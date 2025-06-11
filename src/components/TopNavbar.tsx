// components/TopNavbar/TopNavbar.tsx
import React from "react";
import { FaBars } from "react-icons/fa";
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
   
        </div>
      </div>

      <div className="navbar-right">
        <ConnectButton>Connect Wallet </ConnectButton>
      </div>
    </div>
  );
};

export default TopNavbar;
