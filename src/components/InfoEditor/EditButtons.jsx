function EditButtons({addForm, removeForm}) {
    return(
        <div className="flex flex-row mb-4 gap-4">
            <button className="flex-1 p-2 rounded" type="button" onClick={addForm}>New</button>
            <button className="flex-1 p-2 rounded" type="button" onClick={removeForm}>Remove</button>
        </div>
    )
}

export default EditButtons;
