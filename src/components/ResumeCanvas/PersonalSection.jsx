function PersonalSection({ personalInfo }) {
    return (
        <div className="personal-section">
            <h1 className="name-header">
                {personalInfo.fullName}
            </h1>
            <div>
                <p>
                    <a href={"mailto:" + personalInfo.email}>{personalInfo.email}</a> | {personalInfo.phoneNumber}
                </p>
            </div>
        </div>
    )
}

export default PersonalSection;