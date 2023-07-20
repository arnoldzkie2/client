'use client'
import { faBoxesStacked, faHouse, faListCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header: React.FC = ({ }) => {

    const router = useRouter()

    const [user, setUser] = useState({ name: 'Arnold', token: '' })

    const [open, setIsOpen] = useState(false)

    const logout = async (e: any) => {

        e.preventDefault()

        try {

            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/logout`)

            localStorage.clear()

            router.push('/login')

        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {

        if (!user.name) {
            const currentUser = JSON.parse(localStorage.getItem('user') as any)

            if (currentUser) {
                setUser(currentUser)
            }
        }

    }, [user.name])



    return (
        <header className='fixed bg-white z-20 top-0 left-0 w-screen h-20 shadow-lg px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 flex items-center'>
            <h1 className='text-blue-600 w-80 text-2xl md:text-3xl tracking-tight font-black'>TASK MASTER</h1>
            <ul className='w-full flex items-center justify-end gap-7'>
                <Link href={'/task'} className='flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600'>
                    <div>Task</div>
                    <FontAwesomeIcon icon={faListCheck} />
                </Link>
                <Link href={'/category'} className='flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600'>
                    <div>Category</div>
                    <FontAwesomeIcon icon={faBoxesStacked} />
                </Link>
                <li className='relative'>
                    <button id="dropdownDividerButton" onClick={() => setIsOpen(prevData => !prevData)} data-dropdown-toggle="dropdownDivider" className=" outline-none rounded-lg px-5 py-2.5 flex items-center">{user.name}<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <ul className={`py-2 absolute bg-white shadow ${!open && 'hidden'}`}>
                        <li className='flex items-center gap-3 px-3 text-gray-700 cursor-pointer hover:text-blue-600' onClick={(e: any) => logout(e)}>
                            Logout
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </li>
                    </ul>
                </li>

            </ul>
        </header>

    )
}

export default Header