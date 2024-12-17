function TextInput({ labelText, id, type, stateKey, placeholder, updateFunction }) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">
                {labelText}
            </label>
            <input
                type={type}
                data-key={stateKey}
                placeholder={placeholder}
                onChange={(event) => updateFunction(event, id)}
                className="p-2 border border-gray-300 rounded"
            />
        </div>
    )
}

export default TextInput;