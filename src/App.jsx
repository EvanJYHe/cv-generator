import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/App.css"
import PersonalInfoForm from './components/InfoEditor/PersonalInfoForm'
import exampleData from './ExampleData'
import EducationInfoList from './components/InfoEditor/EducationInfoList'
import uniqid from "uniqid";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experienceInfo)

  function handlePersonalInfoChange(event) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;
    console.log(newInputValue);
    setPersonalInfo({...personalInfo, [key]: newInputValue}) //update the specific attribute with the new value
  }
  
  function handleEducationInfoChange(event, id) {
    const key = event.target.dataset.key;
    const newInputValue = event.target.value;
  
    const newObject = educationInfo.map((form) => {
      if (form.id === id) {
          return { ...form, [key]: newInputValue }; //return changed form object
      }
      return form; //don't change anything if it doesnt match
    });

    console.log(id)
    console.log(newObject)
    setEducationInfo(newObject)
  }

  const addEducationForm = () => {
    const temp =  {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    }
    console.log("created new education form")
    setEducationInfo([...educationInfo, temp]);  //create new form and add it to the state
  };

  const removeEducationForm = (id) => {
    if (educationInfo.length === 1) return; //no need to remove the last form
    console.log("removing the form with id: " + id)
    setEducationInfo(educationInfo.filter((form) => form.id !== id)); //return all forms except the one with the id
  };

  return (
    <div className = "app">
      <div className = "editor-container">
        <PersonalInfoForm updatePersonalInfo={handlePersonalInfoChange}/>
        <EducationInfoList 
        educationInfo={educationInfo} 
        updateEducationInfo={handleEducationInfoChange}
        addEducationForm={addEducationForm}
        removeEducationForm={removeEducationForm}
        />
      </div>
      <div className = "resume-container">
          
      </div>
    </div>
  )
}

export default App
