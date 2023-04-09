import React from 'react'
import classnames from 'classnames'
import styles from './cake.module.css'
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks'
import { InitialCakeType, cakeOrder, cakeRestock } from '../../redux'
type Props = {}

const Cake = (props: Props) => {
    const cakeValue:InitialCakeType = useAppSelector(state => state.cake)
    const dispatch = useAppDispatch()
  return (
    <div className={classnames(styles['cake-wrapper'])}>
        No of Cake : {cakeValue.numOfCakes}
        <button onClick={() => dispatch(cakeOrder())}>Sold 1 cake</button> 
        <button onClick={() => dispatch(cakeRestock())}>Restock 1 cake</button> 
    </div>
  )
}

export default Cake