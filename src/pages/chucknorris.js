'use client'
import { useState, useEffect } from 'react'

export default function clientfetchtest() {
  const cat=["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
  const [category,setCategory]=useState(null)
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(true);
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=>res.json())
    .then(({value})=>{
      setData(value)
      setLoading(false);

    })
  },[])
  const getjoke=async (cat)=>{
    
    setLoading(true)
    try{
      const res=await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`);
      const {value}=await res.json();
      console.log("JOKE: ",value)
      setData(value)
    }
    catch{
      console.log("fetch err")
    }
    finally{

    }
    setLoading(false);
  }
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
              {loading ?<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-600  rounded-lg shadow-md p-4">
  <div className="animate-spin rounded-full bg-blue-500 h-8 w-8"></div>
</div>
              
              :<h2 className='text-white text-xl font-bold pt-24'>{data}</h2>}
                
    </div>
    </section>
    
  )
}
