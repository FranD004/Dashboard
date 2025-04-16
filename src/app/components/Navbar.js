import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-around items-center bg-slate-900 p-4'>
            <ul className='flex gap-4 list-none'> 
                <li>
                    <a href="">Home</a>
                </li>
            </ul>

            <button>LOGIN</button>
            <button>REGISTER</button>
        </nav>
    </div>
  )
}
