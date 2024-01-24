"use client"
import React from 'react';
import { useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import axios from 'axios';

const page = () => {
  const [Images, setImages] = useState([])
  const getImages = async () =>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImages(data)
      console.log(data)
    } catch (error) {
      console.error("error fetching images")
    }
  }
  return (
    <>
    <h1 className='text-center text-3xl'>Random image generator</h1>

    <div className='flex justify-center m-10'>
    <button onClick={getImages}
     className=' px-10 border-2 rounded-xl bg-green-400' >Get Images</button>
    </div>
    

<div>
  {Images.map((elem, i) => (
    <img key={i} src={elem.download_url} 
    width={200}
    height={300}
    className='m-5 rounded-xl inline-block'
    />
  ))}
</div>

    </>
  )
}

export default page

