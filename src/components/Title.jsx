import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='h-[120px] sm:h-[200px] flex flex-col justify-center items-center'>
        <p className='font-bold sm:text-xl text-base text-[--red]'> // {text1} //</p>
        <p className='text-blue-950 font-bold sm:text-5xl text-2xl'>{text2}</p>
    </div>
  )
}

export default Title