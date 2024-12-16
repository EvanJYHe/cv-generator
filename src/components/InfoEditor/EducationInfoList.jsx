import { useState } from 'react';
import uniqid from "uniqid";
import EditButtons from "./EditButtons";


function EducationInfoForm({updateEducationInfo, newForm, removeForm}) {

    return(
            <form>
                <div>
                    <label>School Name</label>
                    <input
                        type = "text"
                        data-key = "schoolName"
                        placeholder = "Enter University Name"
                        onChange = {(event)=> updateEducationInfo(event)}
                    />
                </div>
                <div>
                    <label>Degree</label>
                    <input
                        type = "text"
                        data-key = "degree"
                        placeholder = "Enter Degree Name/Field Of Study"
                        onChange = {(event)=> updateEducationInfo(event)}
                    />
                </div>
                <div>
                    <label>Start Date</label>
                    <input
                        type = "text"
                        data-key = "startDate"
                        placeholder = "yyyy-mm-dd"
                        onChange = {(event)=> updateEducationInfo(event)}
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <input
                        type = "text"
                        data-key = "end Date"
                        placeholder = "yyyy-mm-dd"
                        onChange = {(event)=> updateEducationInfo(event)}
                    />
                </div>
                <EditButtons newForm={newForm} removeForm={removeForm}/>
            </form>
            
    )
}

function EducationInfoList({educationInfo, updateEducationInfo}) {

    const [educationForms, setEducationForms] = useState([{ id: uniqid() }]); //state to store all the education forms by id

    const addNewForm = () => {
        console.log("addNewForm")
        setEducationForms([...educationForms, { id: uniqid() }]);  //create new form and add it to the state
    };

    const removeForm = (id) => {
        if (educationForms.length === 1) return; //no need to remove the last form
        setEducationForms(educationForms.filter((form) => form.id !== id)); //remove form from state
    };

    return(
        <div>
            <h1>
                <i className = "fa fa-graduation-cap"></i> Education
            </h1>
            <div>
                {educationForms.map((form) => (
                    <EducationInfoForm 
                    key={form.id}
                    updateEducationInfo={updateEducationInfo} 
                    newForm={addNewForm} 
                    removeForm={() => removeForm(form.id)} 
                    />
                ))}
            </div>
        </div>
    )
}

export default EducationInfoList;