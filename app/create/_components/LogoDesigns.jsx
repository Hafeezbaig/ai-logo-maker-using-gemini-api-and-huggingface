import { Heading } from 'lucide-react'
import React from 'react'
import HeadingDescription from './HeadingDescription'
import LogoDesig from '@/app/_data/LogoDesig'
import Image from 'next/image'

function LogoDesigns() {
  return (
    <div className='my-10'>
      <HeadingDescription 
      title='Choose Your Logo Style' 
      description='Select the type of logo design that best represents your brands unique identity.' />
       
    <div>
    {LogoDesig.map((design,index)=>(
      <div key={index}>
        <Image src={design.image} alt={design.title} width={300} height={200} />
      </div>
  ))}
    </div>
    </div>

  )
}

export default LogoDesigns