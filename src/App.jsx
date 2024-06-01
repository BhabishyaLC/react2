import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed]=useState(false)
  const [charAllowed, setcharAllowed]=useState(false)
  const [password, setPassword]=useState('')

  const passwordGenerate= useCallback(()=>{
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVYXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)
      {
        str+="0123456789"
      }
      if(charAllowed)
        {
          str+="!@#$%^&*()_+"
        }
      for(let i=0;i<length;i++){
        const num=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(num)
      }
      setPassword(pass)
  }, [length,numAllowed,charAllowed])

  useEffect(()=>{
    passwordGenerate()
  },[length,charAllowed,numAllowed])
  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password)
   refofPass.current?.select()
  }

const refofPass=useRef(null)
 

return (
    <>
    <div className='bg-slate-800 w-full h-screen'>
    <div className='flex justify-center bg-gray-800'>
    <h1 className='bg-gray-400 text-center h-10 text-2xl w-72 rounded-md'>Generate your Password</h1>
    </div>
    <div className='flex justify-center h-40 bg-slate-900 ml-40 mr-40 rounded-xl'>
    <div className=' grid justify-center bg-slate-900 h-20 gap-3'>
      <input type="text" 
      className='border-solid border-2 border-black rounded-lg h-9 mt-3 text-center'
      value={password}
      placeholder='Password'
      ref={refofPass}
      />
      <input type="range"
      min={8}
      max={30}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>setlength(e.target.value)}
       name=""
        id="" 
        />
        <div className='flex gap-3'>
        <button className='w-14 rounded-3xl bg-slate-600 text-white border-none'
        onClick={copyPassword}
        >Copy</button>
        <p className='text-blue-500'>Length: {length}</p>
        <div className='flex gap-1'>
        <label htmlFor="number" className='text-blue-500'>Numbers:</label>
        <input 
        type="checkbox" 
        defaultChecked={numAllowed}
        onChange={()=>{
          setnumAllowed((prev)=>!prev)
        }}
        />
        </div>
        <div className='flex gap-1'>
        <label htmlFor="charater" className='text-blue-500'>Characters:</label>
        <input 
        type="checkbox" 
        defaultChecked={charAllowed}
        onChange={()=>{
          setcharAllowed((prev)=>!prev)
        }}
        />
        </div>
        </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default App
