import React from 'react'
import { Link } from 'react-router-dom'

function RowCourseCard() {
    return (
        <Link to={'/single-course'}>
            <div className='border-2 shadow-lg rounded-lg flex items-center select-none hover:shadow-md hover:shadow-[#f89f27]'>
                <img className='w-[260px] rounded-l-lg' src="../assets/frontend-html.png" alt="frontend" />

                <div className='flex flex-col items-center w-full'>
                    <div className='px-[20px] flex flex-col justify-center'>
                        <h1 className='text-xl font-bold text-center w-[284px] overflow-hidden text-ellipsis whitespace-nowrap'>Frontend React JS Development</h1>
                        <div className='flex gap-[30px] mt-3 w-full  justify-center'>
                            <div className='flex items-center gap-1'>
                                <img className='w-6' src="../assets/modules.png" alt="modules" />
                                <p className='text-xs'>5 Modules</p>
                            </div>

                            <div className='flex items-center gap-1'>
                                <img className='w-6' src="../assets/course-price.webp" alt="course price" />
                                <p className='text-xs'>237$</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-5 pt-2 flex items-center justify-center gap-[30px] border-t-2'>
                        <div className='object-cover'>
                            <img className='w-[40px] h-[40px] rounded-full' src="../assets/mentor1.jpg" alt="mentor1" />
                        </div>
                        <p>
                            <span className='text-sm font-bold'>Mentor:</span> John Doe
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RowCourseCard