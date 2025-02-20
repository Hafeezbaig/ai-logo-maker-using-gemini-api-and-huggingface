import React from 'react'
import HeadingDescription from './HeadingDescription'

function LogoDesc({onHandleInputChange}) {
return (
    <div className='my-10'>
            <HeadingDescription 
            title='Describe Your Logo Idea'
            description='Share your ideas, themes, or any specific elements you want in your logo.' />

<input type="text" placeholder="Enter your Logo Description" className='border border-gray-300 rounded-lg w-full p-4 mt-5' 
        onChange={(e)=>onHandleInputChange(e.target.value)}
        
        />

    </div>
)
}

export default LogoDesc