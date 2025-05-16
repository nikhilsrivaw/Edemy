import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

import Loading from '../../components/students/Loading'
import { assets } from '../../assets/assets'
import { div, li, p } from 'framer-motion/client'
import humanizeDuration from 'humanize-duration'

const CourseDetail = () => {
  const { id } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState(null)

  const { allCourses , calculateRating , calculateNoOfLectures , calculateCourseDuration , calculateChapterTime } = useContext(AppContext)

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse)
  }

  useEffect(() => {
    fetchCourseData()
  })


  const togglesection = (index)=>{
    setOpenSections((prev)=>(
      {...prev , [index]: !prev[index]}
    ))
  }

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
        <div className='absolute top-0 left-0 w-full -z-1 bg-gradient-to-b from-cyan-100/70' style={{ height: '500px' }}></div>

        {/* Left columm */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='md:text-4xl text-lg font-semibold text-gray-800'>{courseData.courseTitle}</h1>
          <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>

          {/* review and rating */}
          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p>{calculateRating(courseData)}</p>
            <div className='flex '>
              {[...Array(5)].map((_, i) => (<img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} />))}
            </div>
            <p className='text-blue-600'>{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'}</p>

            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'student':'students'}</p>
          </div>

          <p className='text-sm '>Course By <span className='text-blue-600 underline'>Nikhil srivastva</span></p>
          <div className='pt-8 text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter,index)=>(
                <div className='border border-gray-300 bg-white mb-2 rounded' key = {index}>
                  <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={()=> togglesection(index)}>
                    <div className = "flex items-center gap-2">
                      <img src={assets.down_arrow_icon} alt="arrow-icon" />
                      <p className = "font-medium md:text-base text-sm">{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>{chapter.chapterContent.length}  lectures-{calculateChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections?.[index] ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture , i)=>(
                        <li key = {i} className='flex items-start gap-2 py-1'>
                          <img className='w-4 h-4 mt-1' src={assets.play_icon} alt="play-icon" />
                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2'>
                              {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'>Preview</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000,{units: ["h" , "m"]})}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>



        </div>
        {/* right columm */}
        <div></div>
      </div>
    </>

  ) : <Loading />
}

export default CourseDetail





