import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const App = () => {

  const randomX = gsap.utils.random(-500, 500, 100)
  const rotateX = gsap.utils.random(-500, 500, 100)
  const randomY = gsap.utils.random(-500, 500, 100)

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)

  const [makhkhi, setMakhkhi] = useState(0)

  const imageRef = useRef()

  useGSAP(()=>{
    gsap.to(imageRef.current,{
      x:xValue,
      y:yValue,
      duration:1,
      rotate:makhkhi
    })
  },[xValue, rotateX, randomY])


  return (
    <main>
       <img onClick={()=>{
          setXValue (randomX)
          setMakhkhi (rotateX)
          setYValue (randomY)
          }} ref={imageRef} src="https://www.clker.com/cliparts/f/c/6/4/11954389542037291081johnny_automatic_bumble_bee.svg.hi.png" alt="makhkhi" />
    </main>
  )
}

export default App
