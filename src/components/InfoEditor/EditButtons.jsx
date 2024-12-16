function EditButtons({addEducationForm, removeEducationForm}) {
    return(
        <div>
            <button type="button" onClick={addEducationForm}>New</button>
            <button type="button" onClick={removeEducationForm}>Remove</button>
        </div>
    )
}

export default EditButtons;
