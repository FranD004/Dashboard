'use client'
import { useForm } from 'react-hook-form'
import React from 'react'

export default function LoginPage() {

  const {register, errors} = useForm()
  
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form className='w-1/4'>
        <h1 
                className='text-slate-200 font-bold text-4xl mb-4'>
                Login
            </h1>
      <label htmlFor='email' className='text-slate-500 mb-2 block text-sm'>
                Email
            </label>
            <input 
                type='email'
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Email is required'
                    }
                })}
                placeholder='user@email.com'
                className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
                {
                    // errors.email && (
                    //     <span
                    //         className='text-red-500'
                    //     >{errors.email.message}</span>
                    // )
                }
            <label htmlFor='password' className='text-slate-500 mb-2 block text-sm'>
                Password
            </label>
            <input 
                type='password' 
                {...register('password', {
                    required: {
                        value: true,
                        message: 'Password is required'
                    }
                })}
                placeholder='********'
                className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
                {
                    // errors.password && (
                    //     <span
                    //         className='text-red-500'
                    //     >{errors.password.message}</span>
                    // )
                }
            <button
            type='submit'
            className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'
            >Login</button>
      </form>
    </div>
  )
}
