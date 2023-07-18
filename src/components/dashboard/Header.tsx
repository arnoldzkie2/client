import { faBoxesStacked, faGear, faListCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {

    setNewCategory: React.Dispatch<React.SetStateAction<boolean>>

    setNewTask: React.Dispatch<React.SetStateAction<boolean>>


}

const Header: React.FC<Props> = ({ setNewCategory, setNewTask }) => {

    return (
        <header className='fixed bg-white z-20 top-0 left-0 w-screen h-20 shadow-lg px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 flex items-center'>
            <h1 className='text-blue-600 w-80 text-2xl md:text-3xl tracking-tight font-black'>TASK MASTER</h1>
            <ul className='w-full flex items-center justify-end gap-5'>
                <li className='flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600' onClick={() => setNewTask(true)}>
                    <div>Task</div>
                    <FontAwesomeIcon icon={faListCheck} />
                </li>
                <li className='flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600' onClick={() => setNewCategory(true)}>
                    <div>Category</div>
                    <FontAwesomeIcon icon={faBoxesStacked} />
                </li>
                <li className='flex items-center gap-3 px-3 text-gray-700 cursor-pointer hover:text-blue-600'>
                    Logout
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </li>
            </ul>
        </header>

    )
}

export default Header