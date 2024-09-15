import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home"
import IssuseDetails from './pages/IssueDetails/IssuseDetails'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetail/ProjectDetails'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project/:id" element={<ProjectDetails/>}/>
      <Route path="/project/:projectId/issue/:issueId" element={<IssuseDetails/>}/>
    </Routes>
 
    </>
  )
}

export default App
