import React from 'react';

interface BeaconProps {
  id: string;
  children?: React.ReactNode;
}

export const Beacon: React.FC<BeaconProps> = ({ id, children }) => {
  return (
    <div data-beacon-id={id}>
      {children}
    </div>
  );
};

export default Beacon; 