import React from 'react'

const Inputs = ({type, placeholder, onChangeValue}) => {
  return (
    <input
        className='m-2 rounded-md text-[15px] pl-2 py-2 w-full'
        type={type}
        placeholder={placeholder}
        onChange={onChangeValue}
    />
  )
}

export default Inputs