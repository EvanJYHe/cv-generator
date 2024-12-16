function EditButtons({newForm, removeForm}) {
    return(
        <div>
            <button type="button" onClick={newForm}>New</button>
            <button type="button" onClick={removeForm}>Remove</button>
        </div>
    )
}

export default EditButtons;
