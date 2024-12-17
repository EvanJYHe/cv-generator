import TextInput from "./TextInput";


function PersonalInfoForm({ updatePersonalInfo }) {
    return (
        <div className="personal-info-form">
            <h1>
                <i className="fa fa-user"></i> Personal
            </h1>
            <form>
                <TextInput
                    labelText={"Full Name"}
                    type={"text"}
                    stateKey={"fullName"}
                    placeholder={"Enter Name"}
                    updateFunction={updatePersonalInfo}
                />
                <TextInput
                    labelText={"Email"}
                    type={"text"}
                    stateKey={"email"}
                    placeholder={"Enter Email"}
                    updateFunction={updatePersonalInfo}
                />
                <TextInput
                    labelText={"Phone Number"}
                    type={"text"}
                    stateKey={"phoneNumber"}
                    placeholder={"Enter Phone Number"}
                    updateFunction={updatePersonalInfo}
                />
            </form>
        </div>
    )
}

export default PersonalInfoForm;