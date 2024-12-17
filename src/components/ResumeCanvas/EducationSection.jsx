function EducationDetails({educationForm}) {
    return(
        <div>
            <div className="education-details">
                <div>
                    {educationForm.schoolName}
                </div>
                <div>
                    {educationForm.degree}
                </div>
            </div>
            <div className="duration-and-location">
                <div>
                    {educationForm.startDate} - {educationForm.endDate}
                </div>
                <div>
                    {educationForm.location}
                </div>
            </div>
        </div>
    )
}


function EducationSection({educationInfo}) {
    return(
        <div>
            <h1>
                Education
            </h1>
            {educationInfo.map((form) => (
            <EducationDetails
                key={form.id}
                //id={form.id}
                educationForm={form}
            />
            ))}
        </div>
    )
}

export default EducationSection;