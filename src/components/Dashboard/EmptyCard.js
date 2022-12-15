import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'

const style = {
  fontSize: "3rem"
}

export default function EmptyCard() {
  return (
    <div className='empty-card-container'>
        <h1 className='empty-card-title'>Empty Card</h1>
        <HiShoppingCart size={120}/>
    </div>
  )
}
