import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/App.css"
import PersonalInfoForm from './components/InfoEditor/PersonalInfoForm'
import exampleData from './ExampleData'
import EducationInfoList from './components/InfoEditor/EducationInfoList'
import uniqid from "uniqid";
import ExperienceInfoList from './components/InfoEditor/ExperienceInfoList'
import PersonalSection from './components/ResumeCanvas/PersonalSection'
import EducationSection from './components/ResumeCanvas/EducationSection'
import ExperienceSection from './components/ResumeCanvas/ExperienceSection'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experienceInfo)

  //---------------------PERSONAL------------------
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

    setExperienceInfo(newObject)
  }

  const addExperienceForm = () => {
    const temp = {
      company: "",
      job: "",
      startDate: "",
      endDate: "",
      description: "",
      id: uniqid(),
    }

    setExperienceInfo([...experienceInfo, temp]);  //create new form and add it to the state
  };

  const removeExperienceForm = (id) => {
    if (experienceInfo.length === 1) return; //no need to remove the last form

    setExperienceInfo(experienceInfo.filter((form) => form.id !== id)); //return all forms except the one with the id
  };

  return (
    <div className="flex flex-row bg-gray-100 w-full">
      <div className="flex-shrink-0 m-6 flex flex-col gap-6">
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
      <div className="text-2xl flex-1 my-6 mr-6 bg-white rounded-lg shadow-md font-serif p-14">
        <PersonalSection
          personalInfo={personalInfo}
        />
        <EducationSection
          educationInfo={educationInfo}
        />
        <ExperienceSection
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  )
}

export default App
