import React from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'

function page() {
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72 '>
        <LogoTitle />

        <div className="flex items-center justify-between mt-10">
            <Button variant="outline"> <ArrowLeft />Previous</Button>
            <Button> <ArrowRight />Continue</Button>
        </div>
    </div>
  )
}

export default page