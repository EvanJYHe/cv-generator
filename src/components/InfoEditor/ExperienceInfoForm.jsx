function ExperienceInfoForm({ id, updateExperienceInfo, addExperienceForm, removeExperienceForm }) {
    return (
        <form>
            <div>
                <label>
                    Company
                </label>
                <input
                    type="text"
                    data-key="company"
                    placeholder="Enter Company Name"
                    onChange={(event) => updateExperienceInfo(event, id)}
                />
            </div>
            <div>
                <label>
                    Job
                </label>
                <input
                    type="text"
                    data-key="job"
                    placeholder="Enter Job Name"
                    onChange={(event) => updateExperienceInfo(event, id)}
                />
            </div>
            <div className="date-forms">
                <label>
                    Start Date
                </label>
                <input
                    type="date"
                    data-key="startDate"
                    placeholder="Enter Start Date"
                    onChange={(event) => updateExperienceInfo(event, id)}
                />
                <label>
                    End Date
                </label>
                <input
                    type="date"
                    data-key="endDate"
                    placeholder="Enter End Date"
                    onChange={(event) => updateExperienceInfo(event, id)}
                />
            </div>
            <div>
                <label>
                    Description
                </label>
                <textarea
                    data-key="job"
                    placeholder="Enter Job Description"
                    onChange={(event) => updateExperienceInfo(event, id)}
                />
            </div>
            <EditButtons addForm={addExperienceForm} removeForm={removeExperienceForm} />
        </form>
    )
}

function ExperienceInfoList({ experienceInfo, updateExperienceInfo, addExperienceForm, removeExperienceForm }) {

    return (
        <div>
            <h1>
                <i className="fa fa-suitcase"></i> Experience
            </h1>
            <div>
                {experienceInfo.map((form) => {
                    <ExperienceInfoForm
                        key={form.id} //used by react to identify elements in list
                        id={form.id} //id to identify specific
                        updateExperienceInfo={updateExperienceInfo}
                        addExperienceForm={addExperienceForm}
                        removeExperienceForm={() => removeExperienceForm(form.id)}
                    />
                })}
            </div>

        </div>
    )
}

export default ExperienceInfoList