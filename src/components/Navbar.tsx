import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

function Navbar() {
  return (
    <div className='flex justify-between gap-8 bg-gray-300 py-4 px-12'>
      <h2 className='text-lg font-semibold'>Clerk Auth</h2>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  )
}

export default Navbar
