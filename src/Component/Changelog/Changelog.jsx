import React from 'react'
import ChangelogItem from '../ChangelogItem/ChangelogItem'
export default function Changelog() {
  return (
    <div className='px-[120px] my-10'>
    <div className='my-8 flex'>
    <h4 className="text-[96px] text-primary font-sfPro uppercase leading-none">
        C<span className="font-gridular">h</span>an<span className="font-gridular">G</span>el<span className="font-gridular">o</span>g
          </h4>

    </div>
    <ChangelogItem />
    <ChangelogItem />
    <ChangelogItem />
    </div>
  )
}
