function PersonalInfoForm({updatePersonalInfo}) {
    return (
        <div className = "">
            <h1>
                Personal:
            </h1>
            <form>
                <div>
                    <label>Full Name</label>
                    <input
                        type = "text"
                        data-key = "fullName"
                        placeholder = "John Doe"
                        onChange = {(event)=> updatePersonalInfo(event)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type = "text"
                        data-key = "email"
                        placeholder = "John.Doe@gmail.com"
                        onChange = {(event)=> updatePersonalInfo(event)}
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type = "text"
                        data-key = "phoneNumber"
                        placeholder = "678-234-3302"
                        onChange = {(event)=> updatePersonalInfo(event)}
                    />
                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm;