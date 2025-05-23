import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Pages/student/Home'
import CourseList from './Pages/student/CourseList'
import CourseDetail from './Pages/student/CourseDetail'
import MyEnrollments from './Pages/student/Myenrollments'
import Player from './Pages/student/player'
import Loading from './components/students/Loading'
import Educator from './Pages/educator/Educator'
import Dashboard from './Pages/educator/Dashboard'
import AddCourse from './Pages/educator/Addcourse'
import Mycourse from './Pages/educator/Mycourse'
import StudentEnrolled from './Pages/educator/StudentEnrolled'
import Navbar from './components/students/Navbar'
import "quill/dist/quill.snow.css";

const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (

    <div className=' text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path = '/educator' element = {<Dashboard />}/>
          <Route path = 'add-course' element = {<AddCourse />}/>
          <Route path = 'my-courses' element = {<Mycourse />}/>
          <Route path = 'student-enrolled' element = {<StudentEnrolled />}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
