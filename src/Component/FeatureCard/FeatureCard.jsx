import React from 'react'

export default function FeatureCard({heading , paragraph , children}) {
  return (
    <div className='p-4 m-1 flex rounded-md gap-10 flex-col bg-secondary'>
        {children}
        <p className='text-orangeGradient text-[16px] font-normal'>{paragraph}</p>
    </div>
  )
}
