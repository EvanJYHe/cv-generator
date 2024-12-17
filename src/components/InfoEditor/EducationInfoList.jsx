import { useState, memo } from 'react';
import uniqid from "uniqid";
import EditButtons from "./EditButtons";
import TextInput from "./TextInput";

function EducationInfoForm({ id, updateEducationInfo, addEducationForm, removeEducationForm }) {

    return (
        <form>
            <TextInput
                labelText={"School Name"}
                type={"text"}
                stateKey={"schoolName"}
                placeholder={"Enter University Name"}
                updateFunction={updateEducationInfo}
                id={id}
            />
            <TextInput
                labelText={"Degree"}
                type={"text"}
                stateKey={"degree"}
                placeholder={"Enter Degree Name/Field Of Study"}
                updateFunction={updateEducationInfo}
                id={id}
            />
            <TextInput
                labelText={"Start Date"}
                type={"text"}
                stateKey={"startDate"}
                placeholder={"yyyy-mm-dd"}
                updateFunction={updateEducationInfo}
                id={id}
            />
            <TextInput
                labelText={"End Date"}
                type={"text"}
                stateKey={"endDate"}
                placeholder={"yyyy-mm-dd"}
                updateFunction={updateEducationInfo}
                id={id}
            />
            <EditButtons addForm={addEducationForm} removeForm={removeEducationForm} />
        </form>

    )
}

function EducationInfoList({ educationInfo, updateEducationInfo, addEducationForm, removeEducationForm }) {

    return (
        <div>
            <h1>
                <i className="fa fa-graduation-cap"></i> Education
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

export default memo(EducationInfoList);