function PersonalSection({ personalInfo }) {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold mb-1">
                {personalInfo.fullName}
            </h1>
            <div>
                <p className="mb-4">
                    <a href={"mailto:" + personalInfo.email} className="text-blue-500 underline">{personalInfo.email}</a> | {personalInfo.phoneNumber}
                </p>
            </div>
        </div>
    )
}

export default PersonalSection;