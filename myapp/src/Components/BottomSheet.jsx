import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../Styles/bottomsheet.module.css';
const BottomSheet = ({ Content }) => {
  const [show, setShow] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  useEffect(() => {
    {
      show && setTimeout(setShowSheet(true), 1);
    }
  }, [show]);
  console.log(show);
  return (
    <>
      {/* Show Button */}
      <button onClick={() => setShow(true)}>Open Bottom Sheet</button>

      {/* Bottom Sheet */}
      <div
        onClick={() => {
          setShowSheet(false);
          setTimeout(() => {
            setShow(false);
          }, 400);
        }}
        className={styles.container}
        style={{ display: show ? 'flex' : 'none' }}
      >
        <div
          className={styles.bottomSheet}
          style={{
            transform: showSheet
              ? 'translateY(0)'
              : 'translateY(100%)',
          }}
        >
          <Content />
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
