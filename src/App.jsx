import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import ViewStudent from './pages/ViewStudent'
import UpdateStudent from './pages/UpdateStudent'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path='/viewstudent' element={<ViewStudent/>}/>
          <Route path='/updatestudent/:id' element={<UpdateStudent/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App