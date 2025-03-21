import React, { useRef } from 'react'
import { gsap } from "gsap";

const ContextSafe = () => {

   const boxRef = useRef()

   const { contextSafe } = useRef()

    const rotateBox = contextSafe(()=>
        gsap.to(boxRef.current,{
        rotate:720,
        duration:1
    }))

  return (
    <main>
        <button onClick={rotateBox}>click me</button>
        <div ref={boxRef} className='box'>BOX</div>
    </main>
  )
}

export default ContextSafe
