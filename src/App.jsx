import React from 'react'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
// #4f46e5
function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <div className='pt-23'>
        <Homepage />
      </div>
    </div>
  )
}

export default App
