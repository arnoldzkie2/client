'use client'
import { faEye, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis, faSearch, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

interface Props {
    task: {
        id: string;
        title: string;
        description: string;
        category: string;
        created_at: string;
        completed: boolean;
    }[]
    searchQuery: string

    setSearchQuery: React.Dispatch<React.SetStateAction<string>>

}

const AllTask: React.FC<Props> = ({ task, searchQuery, setSearchQuery }) => {

    const [completed, setCompleted] = useState(false)

    const filteredTask = completed ? task.filter(item => item.completed === true) : task

    return (
        <div className='flex overflow-x-hidden gap-5 md:gap-10 flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-56 xl:px-96 py-36 w-screen'>
            <div className='w-full flex items-center justify-center gap-5'>
                <div className='relative w-3/5'>
                    <FontAwesomeIcon icon={faSearch} className='absolute top-4 text-gray-600 left-3 text-lg' />
                    <input type="text" value={searchQuery} onChange={(e: any) => setSearchQuery(e.target.value)} placeholder='Search Task' className='w-full py-2.5 px-10 rounded-md border-2 outline-none' />
                </div>
                <select className='border-b border-blue-600 py-2.5 px-3 outline-none bg-slate-50'>
                    <option value="" >All Category</option>
                </select>
                <div className='flex items-center gap-3'>
                    <label htmlFor="completed" className='cursor-pointer'>Completed</label>
                    <input id='completed' type="checkbox" className='w-4 h-4 cursor-pointer' checked={completed ? true : false} onChange={(e) => setCompleted(prevData => !prevData)} />
                </div>
            </div>
            <div className='gap-5 md:gap-10 flex flex-wrap justify-center w-full'>
                {filteredTask && filteredTask.map(item => (
                    <div key={item.id} className='bg-white shadow-xl border-t flex flex-col gap-3 rounded-xl p-5 w-full border-blue-600 sm:w-2/5 relative'>
                        <h1 className='text-lg font-medium text-gray-700'>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className='mt-auto pt-3 flex items-center justify-between'>
                            <small className='text-gray-500'>{item.created_at}</small>
                            <div className='flex items-center gap-5'>
                                <span className={`w-4 h-4 rounded-full ${item.completed ? 'bg-green-500' : 'bg-red-600'}`}></span>
                                <FontAwesomeIcon icon={faEllipsis} className='text-3xl cursor-pointer hover:text-blue-600' />
                                <ul className={`absolute bg-white p-4 flex-col gap-3 right-0 bottom-0 shadow-xl rounded-xl hidden`}>
                                    <li className='flex items-center text-gray-700 cursor-pointer gap-2 hover:text-green-500'>View <FontAwesomeIcon icon={faEye} /></li>
                                    <li className='flex items-center text-gray-700 cursor-pointer gap-2 hover:text-blue-600'>Update <FontAwesomeIcon icon={faPenToSquare} /></li>
                                    <li className='flex items-center text-gray-700 cursor-pointer gap-2 hover:text-red-600'>Delete <FontAwesomeIcon icon={faTrash} /></li>
                                    <li className='mt-3 pt-3 border-t text-black cursor-pointer flex items-center gap-3'>Close <FontAwesomeIcon icon={faXmark} className='text-xl' /></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default AllTask