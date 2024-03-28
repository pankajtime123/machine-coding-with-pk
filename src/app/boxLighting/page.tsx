'use client'
import withCenteredLayout from '@/HOCs/useCenterHOC'
import React, { useEffect, useRef, useState } from 'react'


const BoxLight = () => {
   let color = 'bg-red-400'
   let b:any = [{id:1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]
    
   const [boxes, setBoxes] = useState(b)
   const sequence:number[] = useRef([])
    
   let timer:any = useRef()

   const updateBoxes = (index, isfill=true)=>{
    boxes[index] = {id: boxes[index].id, color: isfill ?color :''}
    let newValue = [...boxes]
    setBoxes(newValue)
   }

   const startOff = ()=>{
    timer.current = setInterval(()=>{
        let id = sequence.current.shift()
        let itemIndex = boxes.findIndex((item)=> id=== item.id)
        updateBoxes(itemIndex, false)
        if(sequence.current.length ==0){
          clearInterval(timer.current)
        }
    },1000)

    
   }


   const handleClick = (index)=>{
    console.log("ind++", sequence.length, boxes.length)
        sequence.current.push(boxes[index].id)
         updateBoxes(index)
        
        if(sequence.current.length === boxes.length){
          console.log("ininsdf++ last")
          startOff()
        }
   }


  


  return (
    <div className={'space-x-4 flex flex-row'}>
     {boxes.map((item, index)=>{
        return (
            <div onClick={()=>handleClick(index)} key={index.toString()} className={`h-24 w-24 ${item?.color} border-cyan-50 border-4`}> </div>
        )
     })}
    </div>
  )
}

export default withCenteredLayout(BoxLight) 