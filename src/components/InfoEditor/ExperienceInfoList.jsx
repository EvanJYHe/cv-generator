import EditButtons from "./EditButtons";
import TextInput from "./TextInput";


function ExperienceInfoForm({ id, updateExperienceInfo, addExperienceForm, removeExperienceForm }) {

    return (
        <form className="mt-4">
            <TextInput
                labelText={"Job"}
                type={"text"}
                stateKey={"job"}
                placeholder={"Enter Job Name"}
                    updateFunction={updateExperienceInfo}
                id={id}
            />
            <TextInput
                labelText={"Company"}
                type={"text"}
                stateKey={"company"}
                placeholder={"Enter Company Name"}
                updateFunction={updateExperienceInfo}
                id={id}
            />
            <TextInput
                labelText={"Location"}
                type={"text"}
                stateKey={"location"}
                placeholder={"Enter Location"}
                updateFunction={updateExperienceInfo}
                id={id}
            />
            <div className="flex flex-row gap-4">
                <TextInput
                    labelText={"Start Date"}
                    type={"date"}
                    stateKey={"startDate"}
                    placeholder={"month, year"}
                    updateFunction={updateExperienceInfo}
                    id={id}
                />
                <TextInput
                    labelText={"End Date"}
                    type={"date"}
                    stateKey={"endDate"}
                    placeholder={"month, year"}
                    updateFunction={updateExperienceInfo}
                    id={id}
                />
            </div>
            <div className="flex flex-col mb-4"> 
                <label className="mb-2 font-medium">
                    Description
                </label>
                <textarea
                    data-key="description"
                    placeholder="Enter Job Description"
                    onChange={(event) => updateExperienceInfo(event, id)}
                    className="p-2 border border-gray-300 rounded"
                />
            </div>
            <EditButtons addForm={addExperienceForm} removeForm={removeExperienceForm} />
        </form>
    )
}

function ExperienceInfoList({ experienceInfo, updateExperienceInfo, addExperienceForm, removeExperienceForm }) {

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1>
                <i className="fa fa-suitcase"></i> Experience
            </h1>
            <div>

                {experienceInfo.map((form) => (
                    <ExperienceInfoForm
                        key={form.id} //used by react to identify elements in list
                        id={form.id} //id to identify specific
                        updateExperienceInfo={updateExperienceInfo}
                        addExperienceForm={addExperienceForm}
                        removeExperienceForm={() => removeExperienceForm(form.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default (ExperienceInfoList);