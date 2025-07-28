import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Subscriptions from './pages/Subscriptions'
import Workouts from './pages/Workouts'
import AddWorkout from './pages/AddWorkout'
import Community from './pages/Community'
import DietPlans from './pages/DietPlans'

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
        <Route path='/add-workout' element={<AddWorkout/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/dietplan' element={<DietPlans/>} />
      </Routes>
     </main>
    </div>
    </Router>
  )
}

export default App