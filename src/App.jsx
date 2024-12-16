import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/App.css"
import PersonalInfoForm from './components/InfoEditor/PersonalInfoForm'
import exampleData from './ExampleData'
import EducationInfoForm from './components/InfoEditor/EducationInfoList'
import EducationInfoList from './components/InfoEditor/EducationInfoList'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experienceInfo)

  function handlePersonalInfoChange(event) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;
    console.log(newInputValue);
    setPersonalInfo({...personalInfo, [key]: newInputValue})
  }

  function handleEducationInfoChange(event) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;
    console.log(newInputValue);
    setPersonalInfo({...educationInfo, [key]: newInputValue})
  }

  return (
    <div className = "app">
      <div className = "editor-container">
        <PersonalInfoForm updatePersonalInfo={handlePersonalInfoChange}/>
        <EducationInfoList educationInfo={educationInfo} updateEducationInfo={handleEducationInfoChange}/>
      </div>
      <div className = "resume-container">
          
      </div>
    </div>
  )
}

export default App
