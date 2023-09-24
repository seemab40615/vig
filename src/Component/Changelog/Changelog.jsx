import React from 'react'
import ChangelogItem from '../ChangelogItem/ChangelogItem'
export default function Changelog() {
  return (
    <div className=' px-4 md:px-[120px] py-[150px]'>
    <div className='flex'>
    <h4 className=" hover-scale  text-[52px] md:text-[96px] mb-10 text-primary font-sfPro uppercase leading-none">
        C<span className="font-gridular">h</span>an<span className="font-gridular">G</span>el<span className="font-gridular">o</span>g
          </h4>

    </div>
    <ChangelogItem />
    <ChangelogItem />
    <ChangelogItem />
    </div>
  )
}
