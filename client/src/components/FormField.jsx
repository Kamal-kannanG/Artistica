import React from 'react'
import { preview } from '../assets'
import Loader from './Loader'

const FormField = ({ LabelName , type , name , placeholder , value , handleChange , isSupriseMe , handleSupriseMe }) => (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className="block text-sm text-gray-900 font-medium">{LabelName}</label>
        { isSupriseMe &&(
          <button type='button' onClick={handleSupriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black w-auto'>
               Suprise Me
          </button>
        )}
        </div>
        <input 
        type={type} 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange} 
        required
        className='bg-gray border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' 
        />
    </div>
  )


export default FormField