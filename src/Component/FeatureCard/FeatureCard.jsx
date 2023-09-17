import React from 'react'

export default function FeatureCard({heading , paragraph}) {
  return (
    <div className='p-4 m-1 flex rounded-md gap-10 flex-col bg-secondary font-gridular'>
        <h4 className='text-[32px] text-primary'>{heading}</h4>
        <p className='text-primary font-plex-mono text-[16px] font-normal'>{paragraph}</p>
    </div>
  )
}
