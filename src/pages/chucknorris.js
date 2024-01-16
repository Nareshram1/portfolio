'use client'
import { useState, useEffect } from 'react'

export default function clientfetchtest() {
  const cat=["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
  const [category,setCategory]=useState(null)
  const [data,setData]=useState(null)
  
  useEffect(()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=>res.json())
    .then(({value})=>setData(value))
  },[])
  const getjoke=async (cat)=>{
    const res=await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`);
    const {value}=await res.json();
    console.log(value)
    setData(value)

  }

    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No profile data</p>
  return (
    <section className=' flex min-h-screen bg-slate-500 align-middle justify-center'>
    <div className="flex bg-slate-600 rounded-lg shadow-md px-9 py-9 text-center mt-72 mb-60 align-middle justify-center">
      <select onChange={(event)=>getjoke(event.target.value)} className='max-h-[1.5rem]'>
          <option defaultValue>Choose a country</option>
            {cat.map((i)=>(
                <option key={i} value={i}>{i}</option>
                ))}
          </select>
          {/* <h2>Selected cat: {category}</h2> */}
                <h2 className='text-white pt-24'>{data}</h2>
    </div>
    </section>

  )
}
