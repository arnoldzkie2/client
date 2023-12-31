import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



interface Task {
    id: string
    name: string
    description: string
    deadline: string
    created_at: string
    updated_at: string
    completed: boolean
    category_id: string
    user_id: string
}
interface Props {
    task: {
        id: string
        name: string
        deadline: string
        description: string
        created_at: string
        updated_at: string
        completed: boolean
        category_id: string
    }
    allCategory: {
        id: string
        name: string
        created_at: string
        updated_at: string
        user_id: string
    }[]

    setViewTask: React.Dispatch<React.SetStateAction<Task>>
}
const ViewTaskModal: React.FC<Props> = ({ task, allCategory, setViewTask }) => {

    const category = allCategory.find((item) => item.id === task.category_id);

    function timeAgo(dateString: string) {
        const createdDate: any = new Date(dateString);
        const currentDate: any = new Date();

        const timeDifferenceInSeconds = Math.floor((currentDate - createdDate) / 1000);

        if (timeDifferenceInSeconds < 60) {
            return `${timeDifferenceInSeconds} second${timeDifferenceInSeconds !== 1 ? 's' : ''} ago`;
        } else if (timeDifferenceInSeconds < 3600) {
            const minutes = Math.floor(timeDifferenceInSeconds / 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (timeDifferenceInSeconds < 86400) {
            const hours = Math.floor(timeDifferenceInSeconds / 3600);
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else {
            const days = Math.floor(timeDifferenceInSeconds / 86400);
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        }
    }
    
    function formatCreatedAtDate(created_at: string) {
        const createdDate = new Date(created_at);
        const day = createdDate.getDate().toString().padStart(2, "0");
        const month = (createdDate.getMonth() + 1).toString().padStart(2, "0");
        const year = createdDate.getFullYear();
        let hours = createdDate.getHours();
        let ampm = "AM";
      
        if (hours >= 12) {
          ampm = "PM";
          hours %= 12;
        }
      
        hours = hours === 0 ? 12 : hours;
      
        return `${day}/${month}/${year}, ${hours}${ampm}`;
      }

    return (
        <div className='fixed top-0 z-30 px-5 py-20 md:py-36 left-0 w-screen h-screen grid place-items-center bg-opacity-50 bg-black'>
            <div className='bg-white w-96 rounded-md shadow-xl flex flex-col p-10 gap-4 border-t-2 border-blue-600 relative'>
                <FontAwesomeIcon icon={faXmark} className='text-2xl absolute top-5 right-5 cursor-pointer' onClick={() => setViewTask({
                    id: '',
                    name: '',
                    description: '',
                    deadline: '',
                    created_at: '',
                    updated_at: '',
                    completed: false,
                    category_id: '',
                    user_id: ''
                })} />
                <strong className='text-gray-700 text-xl'>{task.name}</strong>
                <p>{task.description}</p>
                <div className='flex pt-3 border-t mt-3 gap-1 w-full justify-between'>
                    <small className='flex flex-col'><span className='font-bold text-gray-700'>Deadline: </span>{task.deadline}</small>
                    <small className='flex flex-col'><span className='font-bold text-gray-700'>Created: </span>{formatCreatedAtDate(task.created_at)}</small>
                    <small className='flex flex-col'><span className='font-bold text-gray-700'>Updated: </span>{timeAgo(task.updated_at)}</small>
                </div>
                <div className='flex items-center w-full justify-between'>
                    <small><span className='font-bold text-gray-700'>Category: </span>{category?.name}</small>
                    <small className='flex items-center gap-3'>Completed: <span className={`w-5 h-5 ${task.completed ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></span></small>
                </div>
            </div>
        </div>
    )
}

export default ViewTaskModal