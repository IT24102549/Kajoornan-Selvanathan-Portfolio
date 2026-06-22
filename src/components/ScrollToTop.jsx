import React, {useEffect, useState} from 'react'

export default function ScrollToTop(){
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
      className={`fixed right-6 bottom-6 p-3 rounded-full ${visible ? 'block' : 'hidden'} bg-gradient-to-br from-primary to-accent text-white shadow-lg`}>
      ↑
    </button>
  )
}
