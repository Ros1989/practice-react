import React from 'react';
import s from './MyInput.module.css';

const MyInput = props => {
  return <input className={s.myInput} {...props} />;
};

export default MyInput;
// второй способ получить значение value
// const MyInput = React.forwardRef((props, ref)  => {
//     return (
//         <input ref={ref} className={s.myInput} {...props}/>
//     )
// })

// export default MyInput;
