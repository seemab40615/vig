import React from 'react'
import { Link } from 'react-router-dom'

export default function ChangelogItem() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        <div className=' pb-20 col-span-1'>
            <p className='text-primary font-gridular uppercase'>15 sep, 2022</p>
        </div>
        <div className='border-l border-primary pl-8 pb-20  col-span-3 md:col-span-1 sm:col-span-2 '>
        <h4 className='text-primary text-[36px] font-gridular uppercase leading-none pb-4'>Connectkit update ISI</h4>
        <Link to='/blogdetail' className='px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary flex w-fit group hover:bg-primary hover:text-black items-center'>More Info <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="fill-current text-primary group-hover:text-black"
            >
              <mask
                id="mask0_170_158"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_170_158)">
                <path
                  d="M13.8461 17.6538L12.7923 16.5692L16.6116 12.75H4.5V11.25H16.6116L12.7923 7.43079L13.8461 6.34619L19.5 12L13.8461 17.6538Z"
                  fill="currentColor"
                />
              </g>
            </svg></Link>
        </div>
        <div className='w-full pb-20  md:col-span-1 col-span-3'>
        <p className='text-primary font-plex-mono'>This update improves how ConnectKit handles multiple injected wallets.</p>
        </div>
      
    </div>
  )
}
