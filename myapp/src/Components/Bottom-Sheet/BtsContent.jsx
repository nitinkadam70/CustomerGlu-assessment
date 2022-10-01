import React from 'react';
import styles from '../../Styles/btsContent.module.css';
const data = [
  { hedd: 'Google Keep', para: 'Add to a note', id: 1 },
  { hedd: 'Google Docs', para: 'Embed in a document', id: 2 },
  { hedd: 'Google Plus', para: 'Share with your friends', id: 3 },
  {
    hedd: 'Google Hangouts',
    para: 'Show to your coworkers',
    id: 4,
  },
];

const BtsContent = () => {
  return (
    <>
      {data.map((item) => (
        <div className={styles.container} key={item.id}>
          <h4>{item.hedd}</h4>
          <h5>{item.para}</h5>
        </div>
      ))}
    </>
  );
};

export default BtsContent;
