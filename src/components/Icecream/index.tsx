import React from 'react'
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { icecreamOrdered, icecreamRestocked } from '../../features/icecream/icecreamSlice';
const index = () => {
    const icecreamData = useAppSelector((state) => state.icecream);
    const dispatch = useAppDispatch();

  return (
    <div>
      <div>Icecream amount- {icecreamData.numOfIcecream}</div>
      <button onClick={() => dispatch(icecreamOrdered())}>
        Buy a icecream
      </button>
      <button onClick={() => dispatch(icecreamRestocked(10))}>
        restoke a icecream
      </button>
    </div>
  );
}

export default index