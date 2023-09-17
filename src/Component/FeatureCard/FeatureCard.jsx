import React from 'react'

export default function FeatureCard({paragraph , children}) {
  return (
    <div className='p-4 m-1 flex rounded-md gap-10 flex-col bg-secondary'>
        {children}
        <p className='text-orangeGradient font-normal'>{paragraph}</p>
    </div>
  )
}
