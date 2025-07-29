import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Subscriptions from './pages/Subscriptions'
import Workouts from './pages/Workouts'
import Community from './pages/Community'
import DietPlans from './pages/DietPlans'
import AddWorkout from './pages/AddWorkout'

function App() {

  return (
    <Router>
    <div className='grid-container'>
     <Sidebar />
     <main className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      
        <Route path='/users' element={<Users/>} />
        <Route path='/subscriptions' element={<Subscriptions/>} />
        <Route path='/workouts' element={<Workouts/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/dietplan' element={<DietPlans/>} />
         <Route path='/AddWorkout' element={<AddWorkout />} />
      </Routes>
     </main>
    </div>
    </Router>
  )
}

export default App