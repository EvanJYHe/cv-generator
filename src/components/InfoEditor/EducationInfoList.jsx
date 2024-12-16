import { useState } from 'react';
import uniqid from "uniqid";
import EditButtons from "./EditButtons";


function EducationInfoForm({id, updateEducationInfo, addEducationForm, removeEducationForm}) {
    console.log("this is the forms id: " + id)
    return(
            <form>
                <div>
                    <label>School Name</label>
                    <input
                        type = "text"
                        data-key = "schoolName"
                        placeholder = "Enter University Name"
                        onChange = {(event)=> updateEducationInfo(event, id)}
                    />
                </div>
                <div>
                    <label>Degree</label>
                    <input
                        type = "text"
                        data-key = "degree"
                        placeholder = "Enter Degree Name/Field Of Study"
                        onChange = {(event)=> updateEducationInfo(event, id)}
                    />
                </div>
                <div>
                    <label>Start Date</label>
                    <input
                        type = "text"
                        data-key = "startDate"
                        placeholder = "yyyy-mm-dd"
                        onChange = {(event)=> updateEducationInfo(event, id)}
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <input
                        type = "text"
                        data-key = "end Date"
                        placeholder = "yyyy-mm-dd"
                        onChange = {(event)=> updateEducationInfo(event, id)}
                    />
                </div>
                <EditButtons addEducationForm={addEducationForm} removeEducationForm={removeEducationForm}/>
            </form>
            
    )
}

function EducationInfoList({educationInfo, updateEducationInfo, addEducationForm, removeEducationForm}) {
    console.log("educationInfo:", educationInfo);
    return(
        <div>
            <h1>
                <i className = "fa fa-graduation-cap"></i> Education
            </h1>
            <div>
                
                {educationInfo.map((form) => (
                    <EducationInfoForm 
                    key={form.id} //used by react to identify elements in list
                    id={form.id} //id to identify specific
                    updateEducationInfo={updateEducationInfo} 
                    addEducationForm={addEducationForm} 
                    removeEducationForm={() => removeEducationForm(form.id)} 
                    />
                ))}
            </div>
        </div>
    )
}

export default EducationInfoList;