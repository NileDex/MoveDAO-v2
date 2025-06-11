// components/ChainGovernance/ChainGovernance.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Chain {
  name: string;
  description: string;
  date: string;
  logo: string;
  treasury?: string;
  members?: number;
  established?: string;
}

const ChainGovernance: React.FC = () => {
  const navigate = useNavigate();
  
  const chains: Chain[] = [
    { 
      name: 'Cosmos Hub', 
      description: 'Native chain governance for Cosmos Hub.',
      date: 'June 2022',
      logo: '/logos/cosmos-hub.png',
      established: 'June 2022',
      treasury: '$1.2M est. USD value',
      members: 42
    },
    { 
      name: 'Juno', 
      description: 'Native chain governance for Juno.',
      date: 'January 2023',
      logo: '/logos/juno.png',
      established: 'January 2023',
      treasury: '$890K est. USD value',
      members: 28
    },
    { 
      name: 'Osmosis', 
      description: 'Native chain governance for Osmosis.',
      date: 'April 2023',
      logo: '/logos/osmosis.png',
      established: 'April 2023',
      treasury: '$2.1M est. USD value',
      members: 65
    },
    { 
      name: 'Neutron', 
      description: 'Native chain governance for Neutron.',
      date: 'December 2023',
      logo: '/logos/neutron.png',
      established: 'December 2023',
      treasury: '$750K est. USD value',
      members: 19
    }
  ];

  const handleChainClick = (chain: Chain) => {
    navigate(`/chain/${chain.name.toLowerCase().replace(/\s+/g, '-')}`, {
      state: {
        chainName: chain.name,
        description: chain.description,
        establishedDate: chain.established,
        treasuryValue: chain.treasury,
        memberCount: chain.members
      }
    });
  };

  return (
    <div className="chain-governance">
      <div className="section-header">
        <h2>Chain governance</h2>
        <div className="search-chains">
          <FaSearch />
          <input type="text" placeholder="Find another chain" />
        </div>
      </div>
      
      <div className="chains-grid">
        {chains.map((chain, index) => (
          <div 
            key={index} 
            className="chain-card"
            onClick={() => handleChainClick(chain)}
          >
            <div className="chain-logo-frame">
              <img 
                src={chain.logo} 
                alt={`${chain.name} logo`} 
                className="chain-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling!.textContent = chain.name.charAt(0);
                }}
              />
              <div className="logo-fallback">{chain.name.charAt(0)}</div>
            </div>
            <div className="chain-header">
              <h3>{chain.name}</h3>
              <span className="chain-date">{chain.date}</span>
            </div>
            <p>{chain.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainGovernance;