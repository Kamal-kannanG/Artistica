import React from 'react'
import { Link } from 'react-router-dom'

import { download } from '../assets'
import {RiImageEditLine}from 'react-icons/ri'
import { downloadImage } from '../utils'

const Card = ({ _id , name , prompt ,photo }) => {

  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card' >
       <img src={photo} alt={prompt} className='w-full h-auto object-cover rounded-xl' />
       <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md opacity-80' >
          <p className='text-white text-md overflow-y-auto prompt' >{prompt}</p>
          <div className='mt-5 flex justify-between items-center gap-2' >
            <div className='flex items-center gap-2' >
                <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold' >
                  {name[0]}
                </div>
                <p className='text-white text-sm' >{name}</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
            <Link to={`/api/v1/post/edit-post/${_id}`}>
            <button className='outline-none bg-transparent border-none' type='button'  >
                <RiImageEditLine className='w-6 h-6 text-white'/>
            </button>
            </Link>
            <button className='outline-none bg-transparent border-none' type='button' onClick={() => downloadImage(_id, photo)} >
                <img src={download} alt="download" className='w-6 h-6 object-contain invert' />
            </button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Card