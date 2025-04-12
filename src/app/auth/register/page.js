'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterPage() {

    const { register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = handleSubmit(async data => {

        if (data.password !== data.confirmPassword) {
            return alert('Passwords do not match')
        }
        
        const res = await fetch ('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password
            })
        })

        const resJSON = await res.json()
        console.log(resJSON)
    })

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
        <form onSubmit={onSubmit} className='w-1/4'>
            <h1 
                className='text-slate-200 font-bold text-4xl mb-4'>
                Register
            </h1>
            <label htmlFor='username' className='text-slate-500 mb-2 block text-sm'>
                Username
            </label>
            <input 
                type='text' 
                {...register('username', {
                    required: {
                        value: true,
                        message: 'Username is required'
                    }
                })}
                placeholder='User123'
                className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
                {
                    errors.username && (
                        <span
                            className='text-red-500'
                        >{errors.username.message}</span>
                    )
                }
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
                    errors.email && (
                        <span
                            className='text-red-500'
                        >{errors.email.message}</span>
                    )
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
                    errors.password && (
                        <span
                            className='text-red-500'
                        >{errors.password.message}</span>
                    )
                }
            <label htmlFor='confirmPassword' className='text-slate-500 mb-2 block text-sm'>
                Confirm Password
            </label>    
            <input 
                type='password' 
                {...register('confirmPassword', {
                    required: {
                        value: true,
                        message: 'Confirm Password is required'
                    }
                })}
                placeholder='********'
                className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
                {
                    errors.confirmPassword && (
                        <span 
                            className='text-red-500'
                        >{errors.confirmPassword.message}</span>
                    )
                }

            <button
                type='submit'
                className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'
                >Register</button>
        </form>
    </div>
  )
}
