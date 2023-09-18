import React from 'react'

export default function FeatureCard({paragraph , children , width}) {
  return (
    <div className={`p-4 m-1 flex rounded-3xl gap-10 flex-col bg-secondary ${width}`}>
        {children}
        <p className='text-orangeGradient font-normal'>{paragraph}</p>
    </div>
  )
}
