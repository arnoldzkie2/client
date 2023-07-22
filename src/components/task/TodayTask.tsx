/* eslint-disable react/no-unescaped-entities */
import { Task } from '@/app/task/page'
import React from 'react'

interface Props {
    todayTask: Task[]
}

const TodayTask:React.FC<Props> = ({todayTask}) => {
  return (
    <div className='w-full flex items-center lg:px-16 xl:px-24'>
        <h1 className='font-light lg:font-extralight text-2xl md:text-3xl xl:text-4xl'>Let's Get It Done, Today!</h1>
    </div>
  )
}

export default TodayTask