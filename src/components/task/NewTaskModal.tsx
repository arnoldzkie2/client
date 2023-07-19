import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {

  setNewTask: React.Dispatch<React.SetStateAction<boolean>>
  createTask: () => Promise<void>
  taskForm: {
    name: string;
    description: string;
    category_id: string;
  }
  allCategory: {
    id: string
    name: string
    created_at: string
    udpated_at: string
    user_id: string
  }[]
  handleTaskForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const TaskModal: React.FC<Props> = ({ setNewTask, createTask, taskForm, allCategory, handleTaskForm }) => {

  return (
    <div className='fixed top-0 z-30 px-5 py-20 md:py-36 left-0 w-screen h-screen grid place-items-center bg-opacity-50 bg-black'>
      <form onSubmit={createTask} className='w-full md:w-1/2 lg:w-1/4 bg-white h-full rounded-md shadow-xl relative px-10 py-5 flex flex-col'>
        <FontAwesomeIcon onClick={() => setNewTask(false)} icon={faXmark} className='absolute text-2xl cursor-pointer text-gray-700 right-6 top-6' />
        <h1 className='text-gray-800 text-2xl font-bold'>CREATE NEW TASK</h1>
        <div className='flex flex-col w-full h-full gap-3 my-6'>
          <div className='flex items-center gap-5'>
            <input type="text" placeholder='Title' onChange={handleTaskForm} value={taskForm.name} className='border px-3 text-lg w-full border-gray-300 py-2 outline-none' />
            <select className='py-2.5 outline-none border px-3 border-gray-300' value={taskForm.category_id} onChange={handleTaskForm}>
              {allCategory.map(item => (
                <option value={item.id} key={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <textarea placeholder='Task description...' onChange={handleTaskForm} value={taskForm.description} className='h-full border border-gray-300 p-3 resize-none outline-none' />
        </div>
        <div className='flex items-center gap-5'>
          <button className='bg-white border border-blue-600 text-blue-600 rounded-md py-2.5 text-lg w-1/2 self-end' type='button' onClick={() => setNewTask(false)}>Cancel</button>
          <button className='bg-blue-600 rounded-md py-2.5 text-lg text-white w-1/2 self-end' type='submit'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default TaskModal