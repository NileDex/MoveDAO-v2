// components/MainContent/MainContent.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StatsCards from './StatsCards';
import ChainGovernance from './ChainGovernance';
import CreateDAOForm from './CreateDAOForm';
import ChainDetails from './ChainDetails';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={
          <>
            <div className="content-tabs">
              <div className="tab active">All</div>
              <div className="tab">30d</div>
              <div className="tab">7d</div>
            </div>
            <StatsCards />
            <ChainGovernance />
          </>
        } />
        <Route path="/create" element={<CreateDAOForm />} />
        <Route path="/chain/:chainId" element={<ChainDetails />} />
      </Routes>
    </div>
  );
};

export default MainContent;