import  { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Btn = () => {

    const [count,setcount]=useState(0);

    const handeladd=()=>{
        setcount(count+1);
    }
   
    useEffect(()=>{
    count>0 && toast.success("Added")
    },[count])
  return (
    <>
    <h1 className='text-success'>{count}</h1>
      
    <button className='btn btn-primary mt-5' onClick={handeladd}>Add To Cart</button>

   <ToastContainer />

    </>
  )
}

export default Btn