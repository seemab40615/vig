import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
export default function KeyFeatures() {
    const para1 = "Users can amplify their potential payouts using the platform's leverage system, which multiplies the potential payout but also the risk."
  return (
    <div className='grid grid-cols-12'>
        <div className=' col-span-3 text-[16px] text-primary'>KEY FEATURES</div>
        <div className='flex flex-col col-span-9'>
            <div className='flex flex-row'>
                <FeatureCard  paragraph={para1} >
                <h4 className='text-[32px] text-primary font-sfPro'>LE<span className='font-gridular'>V</span>ERAGE SYSTEM</h4>
                </FeatureCard>
                <div></div>
            </div>
            <div className='flex flex-row'>
                <FeatureCard  paragraph={para1} >
                <h4 className='text-[32px] text-primary font-sfPro'>LE<span className='font-gridular'>V</span>ERAGE SYSTEM</h4>
                </FeatureCard>
            </div>
            <div className='flex flex-row'>
                <FeatureCard  paragraph={para1} >
                <h4 className='text-[32px] text-primary font-sfPro'>LE<span className='font-gridular'>V</span>ERAGE SYSTEM</h4>
                </FeatureCard>
                <FeatureCard  paragraph={para1} >
                <h4 className='text-[32px] text-primary font-sfPro'>LE<span className='font-gridular'>V</span>ERAGE SYSTEM</h4>
                </FeatureCard>
            </div>

        </div>

    </div>
  )
}
