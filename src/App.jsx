import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfoForm from './components/InfoEditor/PersonalInfoForm'
import exampleData from './ExampleData'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experienceInfo)

  function handlePersonalInfoChange() {

  }

  return (
    <>
      <div>
        <PersonalInfoForm />
      </div>
    </>
  )
}

export default App
