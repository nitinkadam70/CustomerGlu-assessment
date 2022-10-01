import React from 'react';
import CountDown from './Components/Count-Down/CountDown';
import BottomSheet from './Components/Bottom-Sheet/BottomSheet';
import BtsContent from './Components/Bottom-Sheet/BtsContent';

const App = () => {
  return (
    <>
      <CountDown />
      <BottomSheet Content={BtsContent} />
    </>
  );
};

export default App;
