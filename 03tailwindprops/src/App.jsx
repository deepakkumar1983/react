import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black-100 p-4 rounded-3xl mb-4'> TailWind Css </h1> 
      <Card username='chaiorcode' btnText='click me'/>
      <Card username='Deepak'/>

    </>
  )
  
}

export default App
