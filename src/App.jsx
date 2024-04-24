import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {
 

  return (
    <>
      
      <div className='d-flex justify-content-center align-ithems-center'style={{height:'100vh'}}>
      

        
        <div className='p-5 rounded' style={{backgroundColor:'black',width:'40%'}}>
        <h1 className='text-primary mt-4 text-center'>Counter Application</h1> 
        <Counter/>
        </div>
        
          

       
      </div>
        
    </>
  )
}

export default App
