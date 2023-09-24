import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
export default function Blog() {
  return (
    <div className='px-4 sm:px-[120px] my-10'>
      <div className=' my-20 flex'>
    <h4 className=" hover-scale  text-[52px] md:text-[96px] mb-10 text-primary font-sfPro uppercase leading-none">
        B<span className="font-gridular">L</span>O<span className="font-gridular">G</span>
          </h4>

    </div>
    <BlogItem />
    <BlogItem />
    <BlogItem />
    </div>
  )
}
