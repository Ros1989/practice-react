import React from 'react';
import s from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [s.myModal];
  if (visible) {
    rootClasses.push(s.active);
  }
  // stopPropagation() это функция, которая есть у event для
  // предотвращения сплытия события
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={s.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
