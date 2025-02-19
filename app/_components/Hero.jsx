"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useState } from 'react'

function Hero() {
    const [logoTitle, setLogoTitle] = useState();
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
    <h2 className='text-primary text-5xl text-center font-bold'>AI Logo Maker</h2>
    <h2 className='text-5xl text-center font-bold'>Perfect Logos for Apps, Businesses, and Websites</h2>
    <h2 className='text-lg text-gray-500'>Craft unique and professional logos effortlessly with our AI-powered tool. Perfect for apps, businesses, websites, and more!</h2>

    <div className='flex gap-6 w-full max-w-2xl mt-10'>
        <input placeholder='Type your Logo Name' className='p-3 border rounded-md w-full shadow-md' 
        onChange={(event)=>setLogoTitle(event?.target.value)} />

        <Link href={'/create?title='+logoTitle}>
        <Button className='w-30 p-6'>Get Started</Button>
        </Link>
    </div>
    </div>
  )
}

export default Hero