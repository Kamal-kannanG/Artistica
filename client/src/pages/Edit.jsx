import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from '../components/index';

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
       <div className='flex flex-col justify-between items-center gap-[77px]'>
        <div className='flex p-6 w-full '>
            <button className='bg-white w-[120px] h-[50px] mr-[400px] '>
                Save
            </button>
        <div className='max-w-[35%] h-auto object-contain '>
        <img src={post.photo}/>
        </div>
        </div>
        <div className='flex flex-col bg-white w-full h-[60px] '>
            side-bar
        </div>
       </div>
    )}
    </>
    
    
  )
  }

export default Edit;