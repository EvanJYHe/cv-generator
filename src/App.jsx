import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/App.css"
import PersonalInfoForm from './components/InfoEditor/PersonalInfoForm'
import exampleData from './ExampleData'
import EducationInfoList from './components/InfoEditor/EducationInfoList'
import uniqid from "uniqid";
import ExperienceInfoList from './components/InfoEditor/ExperienceInfoForm'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experienceInfo)

  function handlePersonalInfoChange(event) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;

    setPersonalInfo({ ...personalInfo, [key]: newInputValue }) //update the specific attribute with the new value
  }

  //---------------------EDUCATION------------------
  function handleEducationInfoChange(event, id) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;

    const newObject = educationInfo.map((form) => {
      if (form.id === id) {
        return { ...form, [key]: newInputValue }; //return changed form object
      }
      return form; //don't change anything if it doesnt match
    });

    setEducationInfo(newObject)
  }

  const addEducationForm = () => {
    const temp = {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    }

    setEducationInfo([...educationInfo, temp]);  //create new form and add it to the state
  };

  const removeEducationForm = (id) => {
    if (educationInfo.length === 1) return; //no need to remove the last form

    setEducationInfo(educationInfo.filter((form) => form.id !== id)); //return all forms except the one with the id
  };

  //---------------------EXPERIENCE------------------
  function handleExperienceInfoChange(event, id) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;

    const newObject = experienceInfo.map((form) => {
      if (form.id === id) {
        return { ...form, [key]: newInputValue }; //return changed form object
      }
      return form; //don't change anything if it doesnt match
    });

    setEducationInfo(newObject)
  }

  const addExperienceForm = () => {
    const temp = {
      company: "",
      job: "",
      start: "",
      end: "",
      description: "",
      id: uniqid(),
    }

    setExperienceInfo([...experienceInfo, temp]);  //create new form and add it to the state
  };

  const removeExperienceForm = (id) => {
    if (experienceInfo.length === 1) return; //no need to remove the last form

    setExperienceInfo(educaexperienceInfotionInfo.filter((form) => form.id !== id)); //return all forms except the one with the id
  };

  return (
    <div className="app">
      <div className="editor-container">
        <PersonalInfoForm updatePersonalInfo={handlePersonalInfoChange} />
        <EducationInfoList
          educationInfo={educationInfo}
          updateEducationInfo={handleEducationInfoChange}
          addEducationForm={addEducationForm}
          removeEducationForm={removeEducationForm}
        />
        <ExperienceInfoList
          experienceInfo={experienceInfo}
          updateExperienceInfo={handleExperienceInfoChange}
          addExperienceForm={addExperienceForm}
          removeExperienceForm={removeExperienceForm}
        />
      </div>
      <div className="resume-container">

      </div>
    </div>
  )
}

export default App
