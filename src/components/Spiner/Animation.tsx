import React from 'react'
// import styles from './styles.module.css'

const Animation = () => {
  return (
    <div className='h-[100vh] z-50'>
        <div className=' bg-amber-300 h-[50vh] animate-move_and_dissapear_up'></div>
        <div className=' bg-amber-300 h-[50vh] animate-move_and_dissapear_down'></div>
    </div>
  )
}

export default Animation