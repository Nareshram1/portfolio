// 'use client'
 
import { useSearchParams } from 'next/navigation'
import { useEffect ,useState} from 'react'

import Image from 'next/image'

// cant use this in client simply use fetch useeffect
export async function getServerSideProps() {
    const searchParams = useSearchParams()
    const search = searchParams.get('category');
    console.log(search)
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${searchParams.category}`);  
    const data=await res.json() 
    return { props: { data } }
  }
export default async function Chucknorries(){

  const cat=["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
    const[category,setCategory]=useState(null);
    useEffect(() => {
        fetch('/api/profile-data')
          .then((res) => res.json())
          .then((data) => {
            setCategory(data)
          })
      }, [])



    return (
    <>
    {/* <div class="bg-white rounded-lg shadow-md px-9 py-9 text-center w-1/2 mt-80 ml-[25rem] align-middle justify-center">
    </div> */}

    <section className=' flex min-h-screen bg-slate-500 align-middle justify-center'>
        <div className="flex bg-slate-600 rounded-lg shadow-md px-9 py-9 text-center mt-72 mb-60 align-middle justify-center">
            <select onChange={(event)=>setCategory(event.target.value)}>
          <option defaultValue>Choose a country</option>
            {cat.map((i)=>(
                <option key={i} value={i}>{i}</option>
                ))}
          </select>
                <h4 className='text-white pt-24'>{category}</h4>
        </div>
        </section>
    </>
    )

}