import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'

const App = () => {

  useGSAP(()=>{
    gsap.to(".box",{
      rotate:720,
      duration:1,
      delay:1,
      y:300,
      opacity:0
    })
  })

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className='ram'>
      </div>
    </main>
  )
}

export default App
