import React from 'react';
import MobileList from './MobileList';
import { useSelector } from 'react-redux';

const Home = () => {
  const { mobiles, filterLists, searchResult } = useSelector((state) => state.mobiles);

  return (
    <div>
      {searchResult ? (
        <MobileList mobiles={filterLists} />
      ) : (
        <div>
          <p>Mobile List:</p>
          <MobileList mobiles={mobiles} />
        </div>
      )}
    </div>
  );
};

export default Home;
