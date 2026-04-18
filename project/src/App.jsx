import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {

  function getPhotos(){
    fetchPhotos()
  }
  return (
    <div>
      <h1 className='h-screen w-full bg-gray-700 text-amber-100'>
        <button onClick={async()=> {
          const data = await fetchPhotos('cat')
          console.log(data)
        }}>Get Photos</button>
        </h1>
    </div>
  )
}

export default App
