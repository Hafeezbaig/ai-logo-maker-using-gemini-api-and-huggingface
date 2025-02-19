import React from 'react'
import Header from './_components/Header'

export default function Provider({children}) {
  return (
    <div>
      <Header />
    <div className='px-10 lg:px-32 xl:px-56'>
    {children}
    </div>
    </div>
  )
}