'use client'
import NewCategoryModal from '@/components/category/NewCategoryModal'
import Header from '@/components/dashboard/Header'
import AllTask from '@/components/task/AllTask'
import TaskModal from '@/components/task/NewTaskModal'
import React, { useState } from 'react'

const Page = () => {

    const [newTask, setNewTask] = useState(false)

    const [newCategory, setNewCategory] = useState(false)

    const [searchQuery, setSearchQuery] = useState('')

    const [allTask, setAllTask] = useState([
        {
            "id": "1",
            "title": "Complete Project Proposal",
            "description": "Draft and finalize the project proposal document for client X. The proposal should outline the project objectives, scope, deliverables, timeline, and estimated budget. It should also highlight the unique selling points of our services and showcase our expertise in the industry. Ensure that the proposal is comprehensive, well-structured, and tailored to meet the specific needs of the client.",
            "category": "Business Development",
            "created_at": "2023-07-18 09:00:00",
            "completed": false
        },
        {
            "id": "2",
            "title": "Schedule Team Meeting",
            "description": "Coordinate with team members to schedule a meeting for project kickoff. The meeting should be set up to discuss project goals, assign tasks and responsibilities, establish timelines, and define communication channels. Ensure that all necessary stakeholders are included and that the meeting time accommodates everyone's availability. Share a detailed meeting agenda and any relevant pre-read materials with the team prior to the scheduled meeting.",
            "category": "Project Management",
            "created_at": "2023-07-18 11:30:00",
            "completed": false
        },
        {
            "id": "3",
            "title": "Review Design Mockups",
            "description": "Provide feedback and review the design mockups for the website redesign project. Assess the visual aesthetics, layout, color scheme, typography, and overall user experience. Pay attention to the alignment with branding guidelines, usability best practices, and target audience preferences. Share constructive feedback with the design team, highlighting both the positive aspects and areas that require improvement. Collaborate with the designers to iterate and refine the mockups.",
            "category": "Design",
            "created_at": "2023-07-18 14:45:00",
            "completed": true
        },
        {
            "id": "4",
            "title": "Prepare Presentation Slides",
            "description": "Create slides and prepare the presentation for the upcoming conference. The presentation should cover the key points, insights, and findings related to our topic. Use visually appealing slides with engaging content, relevant data, and compelling visuals. Ensure that the flow of the presentation is logical, coherent, and easy to follow. Practice the presentation to ensure a confident delivery and make any necessary adjustments based on feedback from colleagues.",
            "category": "Communication",
            "created_at": "2023-07-19 10:00:00",
            "completed": false
        },
        {
            "id": "5",
            "title": "Follow-up with Client",
            "description": "Send a follow-up email to client Y regarding their recent inquiry. Acknowledge their inquiry, express appreciation for their interest, and provide the requested information or address any questions they may have. Personalize the email to create a warm and professional tone. Attach any relevant documents or additional resources that can support their decision-making process. Ensure that the email is clear, concise, and prompt, aiming to maintain a positive client relationship.",
            "category": "Client Management",
            "created_at": "2023-07-19 13:15:00",
            "completed": false
        },
        {
            "id": "6",
            "title": "Research Competitor Analysis",
            "description": "Conduct a comprehensive analysis of competitors' products and strategies. Identify their strengths, weaknesses, market positioning, and pricing strategies. Analyze their marketing campaigns, customer reviews, and target audience engagement. Summarize your findings in a report and present actionable insights to the marketing team to inform our own marketing strategies and gain a competitive edge.",
            "category": "Market Research",
            "created_at": "2023-07-20 09:30:00",
            "completed": true
        },
        {
            "id": "7",
            "title": "Update Website Content",
            "description": "Revise and update the content on the company website to reflect new offerings, industry trends, and business updates. Review existing website pages and identify areas that require improvement or optimization. Ensure that the content is accurate, engaging, and aligned with our brand voice. Collaborate with the marketing and design teams to incorporate visual elements, such as images and videos, to enhance the overall user experience.",
            "category": "Content Management",
            "created_at": "2023-07-20 11:45:00",
            "completed": false
        },
        {
            "id": "8",
            "title": "Attend Project Management Workshop",
            "description": "Participate in a workshop to enhance project management skills and stay updated on the latest industry practices. Engage in interactive sessions, case studies, and group exercises to gain practical insights and learn effective project management techniques. Network with other professionals in the field to exchange ideas and experiences. Apply the knowledge gained during the workshop to improve project management processes within our organization.",
            "category": "Professional Development",
            "created_at": "2023-07-21 14:00:00",
            "completed": false
        },
        {
            "id": "9",
            "title": "Prepare Budget Report",
            "description": "Compile and analyze financial data to create a comprehensive budget report. Review past expenditures, current financial projections, and anticipated revenue. Identify areas for cost optimization and make recommendations for budget reallocation. Collaborate with the finance department to ensure accuracy and alignment with the organization's financial goals. Present the budget report to senior management for review and approval.",
            "category": "Finance",
            "created_at": "2023-07-22 10:30:00",
            "completed": false
        },
        {
            "id": "10",
            "title": "Conduct User Testing",
            "description": "Gather feedback from users through testing sessions for the new software release. Create test scenarios, observe users' interactions, and collect qualitative and quantitative data. Analyze the results to identify usability issues, bugs, or areas of improvement. Collaborate with the development team to prioritize and address the identified issues. Ensure that the software meets user expectations and provides an optimal user experience.",
            "category": "Quality Assurance",
            "created_at": "2023-07-22 14:15:00",
            "completed": true
        },
        {
            "id": "11",
            "title": "Brainstorm Marketing Campaign Ideas",
            "description": "Collaborate with the marketing team to generate creative campaign concepts for an upcoming product launch. Conduct brainstorming sessions, encourage open discussions, and explore innovative ideas. Consider target audience demographics, market trends, and competitors' strategies. Evaluate the feasibility and potential impact of each idea. Select the most promising concepts and develop detailed marketing campaign plans to drive brand awareness and customer engagement.",
            "category": "Marketing",
            "created_at": "2023-07-23 11:00:00",
            "completed": false
        },
        {
            "id": "12",
            "title": "Review Sales Performance",
            "description": "Analyze sales data and performance metrics to identify areas of improvement. Assess key performance indicators (KPIs) such as revenue, conversion rates, customer acquisition, and sales growth. Identify trends, patterns, and potential bottlenecks in the sales process. Collaborate with the sales team to develop strategies and action plans to optimize sales performance. Regularly review and track progress against set targets and make data-driven decisions to drive sales growth.",
            "category": "Sales",
            "created_at": "2023-07-24 09:45:00",
            "completed": false
        },
        {
            "id": "13",
            "title": "Prepare Training Materials",
            "description": "Develop training materials for the upcoming employee onboarding program. Create comprehensive training manuals, presentations, and interactive modules. Ensure that the materials cover all essential topics, including company policies, procedures, and job-specific skills. Incorporate interactive elements, quizzes, and case studies to enhance learning engagement. Collaborate with the HR department and subject matter experts to ensure the accuracy and effectiveness of the training materials.",
            "category": "Training and Development",
            "created_at": "2023-07-25 12:30:00",
            "completed": false
        },
        {
            "id": "14",
            "title": "Optimize Website SEO",
            "description": "Implement SEO best practices to improve the website's search engine visibility and organic traffic. Conduct keyword research to identify relevant search terms. Optimize website content, meta tags, URLs, and headings to align with targeted keywords. Improve website loading speed, mobile responsiveness, and user experience. Build high-quality backlinks and leverage social media to boost online presence. Monitor website performance using analytics tools and make continuous improvements based on data insights.",
            "category": "Digital Marketing",
            "created_at": "2023-07-26 10:15:00",
            "completed": true
        },
        {
            "id": "15",
            "title": "Conduct Team Performance Review",
            "description": "Evaluate individual and team performance to provide constructive feedback and identify areas for growth. Review key performance indicators, project outcomes, and teamwork dynamics. Conduct one-on-one discussions with team members to assess their strengths, weaknesses, and career aspirations. Set performance goals, provide coaching and guidance, and develop personalized development plans. Foster a culture of continuous improvement and support the professional growth of team members.",
            "category": "Human Resources",
            "created_at": "2023-07-27 14:45:00",
            "completed": false
        },
        {
            "id": "16",
            "title": "Prepare Quarterly Sales Report",
            "description": "Compile sales data and insights to create a comprehensive quarterly report. Analyze revenue, sales trends, customer feedback, and market conditions. Visualize data using charts, graphs, and dashboards to convey key findings effectively. Identify growth opportunities, potential risks, and areas that require attention. Present the sales report to the management team, providing strategic recommendations to drive sales performance and achieve targets.",
            "category": "Business Analysis",
            "created_at": "2023-07-28 11:30:00",
            "completed": false
        },
        {
            "id": "17",
            "title": "Develop New Product Prototype",
            "description": "Design and create a functional prototype for the upcoming product launch. Translate product requirements and user needs into a tangible prototype. Use prototyping tools, 3D modeling software, or physical materials to bring the product concept to life. Iterate and refine the prototype based on user feedback and feasibility assessments. Collaborate with cross-functional teams, including design, engineering, and marketing, to ensure the prototype aligns with the product vision.",
            "category": "Product Development",
            "created_at": "2023-07-29 09:00:00",
            "completed": false
        },
        {
            "id": "18",
            "title": "Collaborate with External Partners",
            "description": "Engage and coordinate with external partners for a joint marketing initiative. Identify potential partners aligned with our target audience and marketing objectives. Collaborate on campaign planning, resource allocation, and execution. Leverage each other's expertise and networks to expand reach and drive mutual benefits. Monitor and evaluate the partnership's performance and make adjustments as needed to optimize outcomes.",
            "category": "Partnerships",
            "created_at": "2023-07-30 13:30:00",
            "completed": true
        },
        {
            "id": "19",
            "title": "Review Customer Feedback",
            "description": "Analyze customer feedback and identify areas for improvement in product and services. Gather feedback through surveys, reviews, and customer support interactions. Categorize feedback into different themes and prioritize issues based on their impact on customer satisfaction. Collaborate with product, marketing, and customer support teams to address customer concerns, enhance product features, and improve the overall customer experience.",
            "category": "Customer Experience",
            "created_at": "2023-07-31 10:45:00",
            "completed": false
        },
        {
            "id": "20",
            "title": "Prepare Annual Budget",
            "description": "Collaborate with the finance department to create the annual budget plan for the organization. Review historical financial data, market trends, and strategic goals. Identify revenue streams, allocate funds to different departments, and set budget targets. Consider factors such as operating expenses, capital investments, and financial projections. Present the budget proposal to the management team for review and approval.",
            "category": "Finance",
            "created_at": "2023-08-01 12:15:00",
            "completed": false
        }
    ])

    
    const filterSearch = allTask.filter(item => item.title.toUpperCase().includes(searchQuery.toUpperCase()))

    return (
        <div className='overflow-x-hidden'>
            <Header setNewTask={setNewTask} setNewCategory={setNewCategory} />

            <AllTask task={filterSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {newTask && <TaskModal setNewTask={setNewTask} />}

            {newCategory && <NewCategoryModal setNewCategory={setNewCategory} />}

        </div>
    )
}

export default Page