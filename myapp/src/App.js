import React from 'react';
import BottomSheet from './Components/BottomSheet';
import BtsContent from './Components/BtsContent';
import Timer from './Components/Timer';

const App = () => {
  return (
    <>
      {/* <Timer /> */}
      <BottomSheet Content={BtsContent} />
    </>
  );
};

export default App;
