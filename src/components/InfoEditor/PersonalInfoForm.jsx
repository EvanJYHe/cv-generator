

function PersonalInfoForm({updatePersonalInfo}) {
    return (
        <div className = "personal-info-form">
            <h1>
                <i className = "fa fa-user"></i> Personal
            </h1>
            <form>
                <div>
                    <label>Full Name</label>
                    <input
                        type = "text"
                        data-key = "fullName"
                        placeholder = "Enter Name"
                        onChange = {(event)=> updatePersonalInfo(event)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type = "text"
                        data-key = "email"
                        placeholder = "Enter Email"
                        onChange = {(event)=> updatePersonalInfo(event)}
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type = "text"
                        data-key = "phoneNumber"
                        placeholder = "Enter Phone Number"
                        onChange = {(event)=> updatePersonalInfo(event)}
                    />
                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm;