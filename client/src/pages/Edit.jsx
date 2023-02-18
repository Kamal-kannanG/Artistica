import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from '../components/index';
import {GiResize} from 'react-icons/gi';
import {FiRotateCcw,FiRotateCw} from 'react-icons/fi';
import {BsCrop} from 'react-icons/bs';
import {RxStack} from 'react-icons/rx';
import {TiCancel} from 'react-icons/ti';

import { downloadImage } from '../utils'



 const Edit = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const {_id}=useParams();
    const [filter, setFilter] = useState('');
    const [rotate, setRotate] = useState('');

    const onRRotate =() => {
      setRotate('rotate-[90deg]') ;
    }
    const onLRotate =() => {
      setRotate('rotate-[-90deg]') ;
    }
    const onNRotate =() => {
      setRotate('rotate-0') ;
    }


    const onNoFilter =() => {
      setFilter('') ;
    }
    const onBlur =() => {
      setFilter('blur-[2px]') ;
    }
    const onContrast =() => {
      setFilter('contrast-[200%]') ;
    }
    const onGrayScale =() => {
      setFilter('grayscale-[80%]') ;
    }
    const onHue =() => {
      setFilter('hue-rotate-180') ;
    }
    const onSepia =() => {
      setFilter('sepia') ;
    }
    const onBright =() => {
      setFilter('brightness-[80%]') ;
    }
    const onSaturate =() => {
      setFilter('saturate') ;
    }
    const onInvert =() => {
      setFilter('invert') ;
    }

    useEffect(() =>{
        
        console.log(_id);
        const fetchPost = async () =>{
            try{
                const response = await fetch(`http://localhost:8080/api/v1/post/edit-post/${_id}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    },
                })

                const result = await response.json();
                setPost(result.data);
              }catch(error){
                alert(error)
              }finally{
                setLoading(false);
              }
        }
        fetchPost();
        
       
    },[]);
   const imageCss = filter+' ' + rotate;
  return (
    <>
    {loading ? (
        <div className="flex justify-content">
            <Loader/>
        </div>
        ) : (
      
        <div className='flex flex-col justify-between items-center gap-[10rem]'>
        <div className='flex p-6 w-full '>
            <button onClick={() => downloadImage(_id, post.photo)} className= 'w-[120px] h-[50px] mr-[25%] rounded-md bg-green-700 text-white hover:text-green-700 hover:bg-white'>
                Save
            </button>
        <div className='max-w-[35%] h-auto object-contain '>
          <div className='object-contain w-[500px] h-[500px] mt-18'>
          <img src={post.photo} className={imageCss}/>
          </div>
        </div>
        <div className='max-h-full w-auto flex flex-col items-center justify-between ml-[35%] shadow-barhover p-3 rounded-md bg-transparent'>
        <button className='text-white' onClick={onNoFilter}>No Filter</button>
        <button className='text-white' onClick={onBlur}>Blur</button>
        <button className='text-white' onClick={onContrast}>Contrast</button>
        <button className='text-white' onClick={onGrayScale}>Gray Scale</button>
        <button className='text-white' onClick={onHue}>Hue</button>
        <button className='text-white' onClick={onInvert}>Invert</button>
        <button className='text-white' onClick={onSepia}>Sepia</button>
        <button className='text-white' onClick={onBright}>Bright</button>
        <button className='text-white' onClick={onSaturate}>Saturate</button>
       </div>
        </div>
        <div className='flex  bg-transparent w-full h-[3.5rem] rounded-md shadow-barhover justify-between items-center px-5'>
            <div className='flex flex-col text-white justify-center items-center'>
              <GiResize className='w-6 h-6 text-white cursor-pointer'/>
              <p>Resize</p>
            </div>
            <div className='flex flex-col text-white justify-center items-center'>
              <BsCrop className='w-6 h-6 text-white cursor-pointer'/>
              <p>Crop</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
            <div className='flex flex-col text-white justify-center items-center'>
              <button onClick={onRRotate}>
                <FiRotateCcw className='w-6 h-6 text-white cursor-pointer'/>
              </button>
              <p>Rotate Left</p>
            </div>
            <div className='flex flex-col text-white justify-center items-center'>
              <button onClick={onNRotate}>
                <TiCancel className='w-6 h-6 text-white cursor-pointer'/>
              </button>
              <p>No Rotate</p>
            </div>
            <div className='flex flex-col text-white justify-center items-center'>
              <button onClick={onLRotate}>
                <FiRotateCw className='w-6 h-6 text-white cursor-pointer'/>
              </button>
              <p>Rotate Right</p>
            </div>
            </div>
            <div className='flex flex-col text-white justify-center items-center'>
              <RxStack className='w-6 h-6 cursor-pointer'/>
              <p>Remove Background</p>
            </div>
        </div>
       </div>
       
    )}
    </>
    
    
  )
  }

export default Edit;