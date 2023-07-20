/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import NewCategoryModal from '@/components/category/NewCategoryModal'
import Header from '@/components/home/Header'
import AllTask from '@/components/task/AllTask'
import TaskModal from '@/components/task/NewTaskModal'
import UpdateTaskModal from '@/components/task/UpdateTaskModal'
import ViewTaskModal from '@/components/task/ViewTaskModal'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Category } from '../category/page'


interface User {
    name: string
    token: string
}

interface Task {
    id: string
    name: string
    description: string
    created_at: string
    updated_at: string
    completed: boolean
    category_id: string
    user_id: string
}

const Page = () => {

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const router = useRouter()

    const [user, setUser] = useState<User>({ name: '', token: '' });

    const [newTask, setNewTask] = useState(false)

    const [searchQuery, setSearchQuery] = useState('')

    const [allTask, setAllTask] = useState<Task[]>([
        {
            "id": "1",
            "name": "Complete Project Proposal",
            "description": "Draft and finalize the project proposal document for client X. The proposal should outline the project objectives, scope, deliverables, timeline, and estimated budget. It should also highlight the unique selling points of our services and showcase our expertise in the industry. Ensure that the proposal is comprehensive, well-structured, and tailored to meet the specific needs of the client.",
            "created_at": "2023-07-18 09:00:00",
            "updated_at": "2023-07-18 09:00:00",
            "completed": false,
            "user_id": "1",
            "category_id": "1"
        },
        {
            "id": "2",
            "name": "Schedule Team Meeting",
            "description": "Coordinate with team members to schedule a meeting for project kickoff. The meeting should be set up to discuss project goals, assign tasks and responsibilities, establish timelines, and define communication channels. Ensure that all necessary stakeholders are included and that the meeting time accommodates everyone's availability. Share a detailed meeting agenda and any relevant pre-read materials with the team prior to the scheduled meeting.",
            "created_at": "2023-07-18 11:30:00",
            "updated_at": "2023-07-18 11:30:00",
            "completed": false,
            "user_id": "1",
            "category_id": "2"
        },
        {
            "id": "3",
            "name": "Review Design Mockups",
            "description": "Provide feedback and review the design mockups for the website redesign project. Assess the visual aesthetics, layout, color scheme, typography, and overall user experience. Pay attention to the alignment with branding guidelines, usability best practices, and target audience preferences. Share constructive feedback with the design team, highlighting both the positive aspects and areas that require improvement. Collaborate with the designers to iterate and refine the mockups.",
            "created_at": "2023-07-18 14:45:00",
            "updated_at": "2023-07-18 14:45:00",
            "completed": true,
            "user_id": "1",
            "category_id": "3"
        },
        {
            "id": "4",
            "name": "Prepare Presentation Slides",
            "description": "Create slides and prepare the presentation for the upcoming conference. The presentation should cover the key points, insights, and findings related to our topic. Use visually appealing slides with engaging content, relevant data, and compelling visuals. Ensure that the flow of the presentation is logical, coherent, and easy to follow. Practice the presentation to ensure a confident delivery and make any necessary adjustments based on feedback from colleagues.",
            "created_at": "2023-07-19 10:00:00",
            "updated_at": "2023-07-19 10:00:00",
            "completed": false,
            "user_id": "1",
            "category_id": "4"
        },
        {
            "id": "5",
            "name": "Follow-up with Client",
            "description": "Send a follow-up email to client Y regarding their recent inquiry. Acknowledge their inquiry, express appreciation for their interest, and provide the requested information or address any questions they may have. Personalize the email to create a warm and professional tone. Attach any relevant documents or additional resources that can support their decision-making process. Ensure that the email is clear, concise, and prompt, aiming to maintain a positive client relationship.",
            "created_at": "2023-07-19 13:15:00",
            "updated_at": "2023-07-19 13:15:00",
            "completed": false,
            "user_id": "1",
            "category_id": "5"
        },
        {
            "id": "6",
            "name": "Research Competitor Analysis",
            "description": "Conduct a comprehensive analysis of competitors' products and strategies. Identify their strengths, weaknesses, market positioning, and pricing strategies. Analyze their marketing campaigns, customer reviews, and target audience engagement. Summarize your findings in a report and present actionable insights to the marketing team to inform our own marketing strategies and gain a competitive edge.",
            "created_at": "2023-07-20 09:30:00",
            "updated_at": "2023-07-20 09:30:00",
            "completed": true,
            "user_id": "1",
            "category_id": "6"
        },
        {
            "id": "7",
            "name": "Update Website Content",
            "description": "Revise and update the content on the company website to reflect new offerings, industry trends, and business updates. Review existing website pages and identify areas that require improvement or optimization. Ensure that the content is accurate, engaging, and aligned with our brand voice. Collaborate with the marketing and design teams to incorporate visual elements, such as images and videos, to enhance the overall user experience.",
            "created_at": "2023-07-20 11:45:00",
            "updated_at": "2023-07-20 11:45:00",
            "completed": false,
            "user_id": "1",
            "category_id": "7"
        },
        {
            "id": "8",
            "name": "Attend Project Management Workshop",
            "description": "Participate in a workshop to enhance project management skills and stay updated on the latest industry practices. Engage in interactive sessions, case studies, and group exercises to gain practical insights and learn effective project management techniques. Network with other professionals in the field to exchange ideas and experiences. Apply the knowledge gained during the workshop to improve project management processes within our organization.",
            "created_at": "2023-07-21 14:00:00",
            "updated_at": "2023-07-21 14:00:00",
            "completed": false,
            "user_id": "1",
            "category_id": "8"
        },
        {
            "id": "9",
            "name": "Prepare Budget Report",
            "description": "Compile and analyze financial data to create a comprehensive budget report. Review past expenditures, current financial projections, and anticipated revenue. Identify areas for cost optimization and make recommendations for budget reallocation. Collaborate with the finance department to ensure accuracy and alignment with the organization's financial goals. Present the budget report to senior management for review and approval.",
            "created_at": "2023-07-22 10:30:00",
            "updated_at": "2023-07-22 10:30:00",
            "completed": false,
            "user_id": "1",
            "category_id": "9"
        },
        {
            "id": "10",
            "name": "Conduct User Testing",
            "description": "Gather feedback from users through testing sessions for the new software release. Create test scenarios, observe users' interactions, and collect qualitative and quantitative data. Analyze the results to identify usability issues, bugs, or areas of improvement. Collaborate with the development team to prioritize and address the identified issues. Ensure that the software meets user expectations and provides an optimal user experience.",
            "created_at": "2023-07-22 14:15:00",
            "updated_at": "2023-07-22 14:15:00",
            "completed": true,
            "user_id": "1",
            "category_id": "10"
        },
        {
            "id": "11",
            "name": "Brainstorm Marketing Campaign Ideas",
            "description": "Collaborate with the marketing team to generate creative campaign concepts for an upcoming product launch. Conduct brainstorming sessions, encourage open discussions, and explore innovative ideas. Consider target audience demographics, market trends, and competitors' strategies. Evaluate the feasibility and potential impact of each idea. Select the most promising concepts and develop detailed marketing campaign plans to drive brand awareness and customer engagement.",
            "created_at": "2023-07-23 11:00:00",
            "updated_at": "2023-07-23 11:00:00",
            "completed": false,
            "user_id": "1",
            "category_id": "11"
        },
        {
            "id": "12",
            "name": "Review Sales Performance",
            "description": "Analyze sales data and performance metrics to identify areas of improvement. Assess key performance indicators (KPIs) such as revenue, conversion rates, customer acquisition, and sales growth. Identify trends, patterns, and potential bottlenecks in the sales process. Collaborate with the sales team to develop strategies and action plans to optimize sales performance. Regularly review and track progress against set targets and make data-driven decisions to drive sales growth.",
            "created_at": "2023-07-24 09:45:00",
            "updated_at": "2023-07-24 09:45:00",
            "completed": false,
            "user_id": "1",
            "category_id": "12"
        },
        {
            "id": "13",
            "name": "Prepare Training Materials",
            "description": "Develop training materials for the upcoming employee onboarding program. Create comprehensive training manuals, presentations, and interactive modules. Ensure that the materials cover all essential topics, including company policies, procedures, and job-specific skills. Incorporate interactive elements, quizzes, and case studies to enhance learning engagement. Collaborate with the HR department and subject matter experts to ensure the accuracy and effectiveness of the training materials.",
            "created_at": "2023-07-25 12:30:00",
            "updated_at": "2023-07-25 12:30:00",
            "completed": false,
            "user_id": "1",
            "category_id": "13"
        },
        {
            "id": "14",
            "name": "Optimize Website SEO",
            "description": "Implement SEO best practices to improve the website's search engine visibility and organic traffic. Conduct keyword research to identify relevant search terms. Optimize website content, meta tags, URLs, and headings to align with targeted keywords. Improve website loading speed, mobile responsiveness, and user experience. Build high-quality backlinks and leverage social media to boost online presence. Monitor website performance using analytics tools and make continuous improvements based on data insights.",
            "created_at": "2023-07-26 10:15:00",
            "updated_at": "2023-07-26 10:15:00",
            "completed": true,
            "user_id": "1",
            "category_id": "14"
        },
        {
            "id": "15",
            "name": "Conduct Team Performance Review",
            "description": "Evaluate individual and team performance to provide constructive feedback and identify areas for growth. Review key performance indicators, project outcomes, and teamwork dynamics. Conduct one-on-one discussions with team members to assess their strengths, weaknesses, and career aspirations. Set performance goals, provide coaching and guidance, and develop personalized development plans. Foster a culture of continuous improvement and support the professional growth of team members.",
            "created_at": "2023-07-27 14:45:00",
            "updated_at": "2023-07-27 14:45:00",
            "completed": false,
            "user_id": "1",
            "category_id": "15"
        },
        {
            "id": "16",
            "name": "Prepare Quarterly Sales Report",
            "description": "Compile sales data and insights to create a comprehensive quarterly report. Analyze revenue, sales trends, customer feedback, and market conditions. Visualize data using charts, graphs, and dashboards to convey key findings effectively. Identify growth opportunities, potential risks, and areas that require attention. Present the sales report to the management team, providing strategic recommendations to drive sales performance and achieve targets.",
            "created_at": "2023-07-28 11:30:00",
            "updated_at": "2023-07-28 11:30:00",
            "completed": false,
            "user_id": "1",
            "category_id": "16"
        },
        {
            "id": "17",
            "name": "Develop New Product Prototype",
            "description": "Design and create a functional prototype for the upcoming product launch. Translate product requirements and user needs into a tangible prototype. Use prototyping tools, 3D modeling software, or physical materials to bring the product concept to life. Iterate and refine the prototype based on user feedback and feasibility assessments. Collaborate with cross-functional teams, including design, engineering, and marketing, to ensure the prototype aligns with the product vision.",
            "created_at": "2023-07-29 09:00:00",
            "updated_at": "2023-07-29 09:00:00",
            "completed": false,
            "user_id": "1",
            "category_id": "17"
        },
        {
            "id": "18",
            "name": "Collaborate with External Partners",
            "description": "Engage and coordinate with external partners for a joint marketing initiative. Identify potential partners aligned with our target audience and marketing objectives. Collaborate on campaign planning, resource allocation, and execution. Leverage each other's expertise and networks to expand reach and drive mutual benefits. Monitor and evaluate the partnership's performance and make adjustments as needed to optimize outcomes.",
            "created_at": "2023-07-30 13:30:00",
            "updated_at": "2023-07-30 13:30:00",
            "completed": true,
            "user_id": "1",
            "category_id": "18"
        },
        {
            "id": "19",
            "name": "Review Customer Feedback",
            "description": "Analyze customer feedback and identify areas for improvement in product and services. Gather feedback through surveys, reviews, and customer support interactions. Categorize feedback into different themes and prioritize issues based on their impact on customer satisfaction. Collaborate with product, marketing, and customer support teams to address customer concerns, enhance product features, and improve the overall customer experience.",
            "created_at": "2023-07-31 10:45:00",
            "updated_at": "2023-07-31 10:45:00",
            "completed": false,
            "user_id": "1",
            "category_id": "19"
        },
        {
            "id": "20",
            "name": "Prepare Annual Budget",
            "description": "Collaborate with the finance department to create the annual budget plan for the organization. Review historical financial data, market trends, and strategic goals. Identify revenue streams, allocate funds to different departments, and set budget targets. Consider factors such as operating expenses, capital investments, and financial projections. Present the budget proposal to the management team for review and approval.",
            "created_at": "2023-08-01 12:15:00",
            "updated_at": "2023-08-01 12:15:00",
            "completed": false,
            "user_id": "1",
            "category_id": "20"
        }
    ])

    const [allCategory, setAllCategory] = useState<Category[]>([])

    const [taskForm, setTaskForm] = useState({
        name: '',
        description: '',
        category_id: ''
    })

    const [updateTaskForm, setUpdateTaskForm] = useState<Task>({
        id: '',
        name: '',
        description: '',
        category_id: '',
        created_at: '',
        updated_at: '',
        user_id: '',
        completed: false,
    })

    const [viewTask, setViewTask] = useState<Task>({
        id: '',
        name: '',
        description: '',
        created_at: '',
        updated_at: '',
        completed: false,
        category_id: '',
        user_id: ''
    })

    const [isUpdating, setIsUpdating] = useState(false)

    const getAllTask = async () => {

        try {

            const { data } = await axios.get(`${API_URL}/api/v1/tasks`, {
                headers: {
                    Authorization: user.token
                }
            })

            setAllTask(data)

        } catch (error) {


            console.log(error);

        }

    }

    const getAllCategory = async () => {
        try {

            const { data } = await axios.get(`${API_URL}/api/v1/categories`, {
                headers: {
                    Authorization: user.token
                }
            })

            setAllCategory(data)

        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {

        if (!user.name) {

            const currentUser = JSON.parse(localStorage.getItem('user') as any)

            if (!currentUser) {

                // router.push('/login')

            } else {

                setUser(currentUser)

            }
        }

        if (user.name) {

            getAllTask();
            getAllCategory()
        }

    }, [user]);


    const filterSearch = allTask.filter(item => item.name.toUpperCase().includes(searchQuery.toUpperCase()))

    const createTask = async (e: any) => {

        e.preventDefault()

        const { name, description, category_id } = taskForm

        try {

            const { data } = await axios.post(`${API_URL}/api/v1/tasks`, { name, description, category_id }, {
                headers: {
                    Authorization: user.token
                }
            })

            await getAllTask()

            setNewTask(false)
            setTaskForm({
                name: '',
                description: '',
                category_id: ''
            })

        } catch (error) {

            console.log(error);

        }
    }

    const deleteTask = async (ID: string) => {

        try {

            const { data } = await axios.delete(`${API_URL}/api/v1/tasks/${ID}`, {
                headers: {
                    Authorization: user.token
                }
            })

            await getAllTask()

        } catch (error) {

            console.log(error);

        }
    }

    const handleTaskForm = (e: any) => {
        const { name, value } = e.target;
        setTaskForm((prevTaskForm) => ({
            ...prevTaskForm,
            [name]: value,
        }));
    };
    const handleUpdateTaskForm = (e: any) => {
        const { name, value, type, checked } = e.target;

        // For checkboxes, use 'checked' instead of 'value' to get the boolean value
        const newValue = type === 'checkbox' ? checked : value;

        setUpdateTaskForm(prevData => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const openUpdateTask = (task: Task) => {
        setUpdateTaskForm(task)
        setIsUpdating(true)
    }

    const closeUpdateTask = () => {

        setIsUpdating(false)
        setUpdateTaskForm({
            id: '',
            name: '',
            description: '',
            category_id: '',
            created_at: '',
            updated_at: '',
            completed: false,
            user_id: ''
        })
    }

    const updateTask = async (e: any) => {

        e.preventDefault()

        const { id, completed, name, description, category_id } = updateTaskForm
        try {

            const { data } = await axios.patch(`${API_URL}/api/v1/tasks/${id}`, {
                completed, name, description, category_id
            }, {
                headers: {
                    Authorization: user.token
                }
            })

            await getAllTask()

            setUpdateTaskForm({
                id: '',
                name: '',
                description: '',
                category_id: '',
                created_at: '',
                updated_at: '',
                user_id: '',
                completed: false,
            })

        } catch (error) {

            console.log(error);

        }
    }

    const updateCompleted = async (e: any, task: Task) => {

        e.preventDefault()

        try {

            const { data } = await axios.patch(`${API_URL}/api/v1/tasks/${task.id}`, {
                completed: !task.completed
            }, {
                headers: {
                    Authorization: user.token
                }
            })

            await getAllTask()

        } catch (error) {

            console.log(error);

        }
    }
    return (
        <div className='overflow-x-hidden'>

            <Header />

            <AllTask allCategory={allCategory} updateCompleted={updateCompleted} setNewTask={setNewTask} openUpdateTask={openUpdateTask} task={filterSearch} deleteTask={deleteTask} setViewTask={setViewTask} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {newTask && <TaskModal setTaskForm={setTaskForm} handleTaskForm={handleTaskForm} allCategory={allCategory} setNewTask={setNewTask} taskForm={taskForm} createTask={createTask} />}

            {viewTask.name && <ViewTaskModal task={viewTask} allCategory={allCategory} setViewTask={setViewTask} />}

            {isUpdating && <UpdateTaskModal updateTask={updateTask} closeUpdateTask={closeUpdateTask} taskForm={updateTaskForm} handleUpdateTaskForm={handleUpdateTaskForm} allCategory={allCategory} />}
        </div>
    )
}

export default Page