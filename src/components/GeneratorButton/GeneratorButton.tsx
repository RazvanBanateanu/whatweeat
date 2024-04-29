import React from 'react'

const GeneratorButton = ( {action}:any ) => {
  return (
    <div className='w-[100vw] text-center'>
        <button onClick={action} className='text-2xl p-2  mt-16 font-bold bg-slate-500 rounded-3xl mb-16 shadow-md'>Generate</button>
    </div>
  )
}

export default GeneratorButton