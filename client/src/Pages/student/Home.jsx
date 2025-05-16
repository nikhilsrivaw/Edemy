import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from '../../components/students/companies'
import CourseSection from '../../components/students/CourseSection'
import Testimonial from '../../components/students/Testimonial'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/educator/Footer'
import Fuoter from '../../components/students/Fuoter'

const Home = () => {
  return (
    <div className = 'flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies/>
      <CourseSection/>
      <Testimonial/>
      <CallToAction/>
      <Fuoter/>
    </div>
  )
}

export default Home
