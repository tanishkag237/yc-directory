import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import {signIn,signOut, auth } from '@/auth'

const Navbar =async () =>{
    const session = await auth() //server rendered component
  return (
    <header className='px-3 py-5 bg-white shadow-sm font-work-sans text-black'>
        <nav className='justify-between flex items-center'>
            <Link href="/">
            <Image src="/logo.png" alt='logo' height={30} width={144}/>
            </Link>

            {/* only render things if the user is logged in */}
            <div className='items-center flex gap-5 text-black'> 
            {session && session?.user ? 
            <>
            <Link href="/startup/create">
            <span className='px-1'> Create</span>
            </Link>

            <form action={async () => {
                "use server";
                await signOut({redirectTo: '/'})}}>
                <button className='px-1' type='submit'> Logout</button>
            </form>

            <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
            </Link>
            </>
            
            :
            <form action={ async () =>
            {"use server";
            await signIn('github');
            }}>
                <button type='submit'>Login</button>
            </form>}

            </div>
        </nav>
    </header>
  )
}

export default Navbar