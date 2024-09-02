"use client"
import { useState } from 'react'


export default function SubscriptionForm() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      setMessage('')
      try {
        const response = await fetch('app/api/subscribe.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
        const data = await response.json()
        if (!response.ok) throw new Error(data.message || 'An error occurred')
        setMessage(data.message)
        setEmail('')
      } catch (error) {
        console.error('Subscription error:', error)
        setMessage(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    return(
        <>
            <form className='flex space-x-3 w-full' onSubmit={handleSubmit}>
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Your email address...' 
                className='w-full border border-stone-300 rounded-md py-2 px-4 font-light text-lg'
                />
                <button className='bg-black text-white rounded-md px-4 py-2 ml-2' type="submit" disabled={isLoading}>{isLoading ? 'Subscribing...' : 'Subscribe'}</button>
            </form>
            {message && <p>{message}</p>}
        </>
    )
}