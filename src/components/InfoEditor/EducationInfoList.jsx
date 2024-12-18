import uniqid from "uniqid";
import EditButtons from "./EditButtons";
import TextInput from "./TextInput";
import { useEffect } from "react";

function EducationInfoForm({ id, updateEducationInfo, addEducationForm, removeEducationForm }) {
    return (
        <form className="mt-4">
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
            <div className="flex flex-row gap-4">
                <TextInput
                    labelText={"Start Date"}
                    type={"date"}
                    stateKey={"startDate"}
                    placeholder={"yyyy-mm-dd"}
                    updateFunction={updateEducationInfo}
                    id={id}
                />
                <TextInput
                    labelText={"End Date"}
                    type={"date"}
                    stateKey={"endDate"}
                    placeholder={"yyyy-mm-dd"}
                    updateFunction={updateEducationInfo}
                    id={id}
                />
            </div>
            <EditButtons addForm={addEducationForm} removeForm={removeEducationForm} />
        </form>

    )
}

function EducationInfoList({ educationInfo, updateEducationInfo, addEducationForm, removeEducationForm }) {

    return (
        <div className="p-6 bg-white rounded-lg">
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

export default (EducationInfoList);