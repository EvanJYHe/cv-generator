function EditButtons({addForm, removeForm}) {
    return(
        <div>
            <button type="button" onClick={addForm}>New</button>
            <button type="button" onClick={removeForm}>Remove</button>
        </div>
    )
}

export default EditButtons;
