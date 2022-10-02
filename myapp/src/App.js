import React from 'react';
import BottomSheet from './Components/Bottom-Sheet/BottomSheet';
import BtsContent from './Components/Bottom-Sheet/BtsContent';
import Timer from './Components/Count-Down/Timer';

const App = () => {
  return (
    <>
      <Timer />
      <BottomSheet Content={BtsContent} />
    </>
  );
};

export default App;
