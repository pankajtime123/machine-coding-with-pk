import withCenteredLayout from '@/HOCs/useCenterHOC'
import React from 'react'

const BoxLight = () => {
   let boxes = [{id:1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]

  return (
    <div className={'space-x-4 flex flex-row'}>
     {boxes.map((item, index)=>{
        return (
            <div key={index.toString()} className={`h-24 w-24 bg-red-400 border-cyan-50 border-4`}> </div>
        )
     })}
    </div>
  )
}

export default withCenteredLayout(BoxLight) 