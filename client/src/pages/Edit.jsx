import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from '../components/index';
import {GiResize} from 'react-icons/gi';
import {FiRotateCcw,FiRotateCw} from 'react-icons/fi';
import {BsCrop} from 'react-icons/bs';
import {RxStack} from 'react-icons/rx';


 const Edit = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const {_id}=useParams();

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
  return (
    <>
    {loading ? (
        <div className="flex justify-content">
            <Loader/>
        </div>
        ) : (
       <div className='flex flex-col justify-between items-center gap-[1rem]'>
        <div className='flex p-6 w-full '>
            <button className= 'w-[120px] h-[50px] mr-[25%] rounded-md bg-green-700 text-white hover:text-green-700 hover:bg-white'>
                Save
            </button>
        <div className='max-w-[35%] h-auto object-contain '>
        <img src={post.photo}/>
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
            <div className='flex flex-col text-white justify-center items-center'>
              <FiRotateCcw className='w-6 h-6 text-white cursor-pointer'/>
              <p>Rotate Left</p>
            </div>
            <div className='flex flex-col text-white justify-center items-center'>
              <FiRotateCw className='w-6 h-6 text-white cursor-pointer'/>
              <p>Rotate Right</p>
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