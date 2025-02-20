"use client";

import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import { useSearchParams } from 'next/navigation'

function LogoTitle() {

    const searchParam=useSearchParams();
    const [title, setTitle] = useState(searchParam?.get('title')??'')


  return (
    <div className='my-10'>
        <HeadingDescription 
        title={'Logo Title'}
        description={'Add Your Business, App or Website Name for a Custom Logo'} />


        <input type="text" placeholder="Enter your Logo Name" className='border border-gray-300 rounded-lg w-full p-4 mt-5' 
        defaultValue={title}
        onChange={(e)=>onHandleInputChange(e.target.value)}
        
        />
    </div>
  )
}

export default LogoTitle