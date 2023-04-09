import React from 'react'
import classnames from 'classnames'
import styles from './icecream.module.css'
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks'
import { icecreamOrder, icecreamRestock } from '../../redux'
type Props = {}

const IceCream = (props: Props) => {
    const numOfIcecream = useAppSelector(state => state.icecream)
    const dispatch = useAppDispatch()
  return (
    <div className={classnames(styles['icecream-wrapper'])}>
        No of IceCream - {numOfIcecream.numOfIcecream}
        <button onClick={()=> dispatch(icecreamOrder(1))}>Sold 1 IceCream</button> 
        <button onClick={()=> dispatch(icecreamRestock(1))}>Restock 1 IceCream</button> 
    </div>
  )
}

export default IceCream