import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { cakeOrdered, cakeRestocked } from '../../features/cake/cakeSlice';
const index = () => {
    const cakeData = useAppSelector((state) => state.cake);
    const dispatch = useAppDispatch();
  return (
    <div>
      <div>cake amount- {cakeData.numOfCakes}</div>
      <button onClick={() => dispatch(cakeOrdered(4))}>Buy a cake</button>
      <button onClick={() => dispatch(cakeRestocked(10))}>
        restoke a cake
      </button>
    </div>
  );
}

export default index