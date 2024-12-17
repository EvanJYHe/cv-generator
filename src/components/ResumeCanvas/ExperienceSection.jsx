function ExperienceDetails({experienceForm}) {
    return(
        <div>
            <div className="experience-details">
                <div>
                    {experienceForm.job}
                </div>
                <div>
                    {experienceForm.company}
                </div>
                <div>
                    {experienceForm.description}
                </div>
            </div>
            <div className="duration-and-location">
                <div>
                    {experienceForm.startDate} - {experienceForm.endDate}
                </div>
                <div>
                    {experienceForm.location}
                </div>
            </div>
        </div>
    )
}


function ExperienceSection({experienceInfo}) {
    return(
        <div>
            <h1>
                Experience
            </h1>
            <hr/>
            {experienceInfo.map((form) => (
            <ExperienceDetails
                key={form.id}
                //id={form.id}
                experienceForm={form}
            />
            ))}
        </div>
    )
}

export default ExperienceSection;