function TextInput({ labelText, id, type, stateKey, placeholder, updateFunction }) {
    return (
        <div>
            <label>
                {labelText}
            </label>
            <input
                type={type}
                data-key={stateKey}
                placeholder={placeholder}
                onChange={(event) => updateFunction(event, id)}
            />
        </div>
    )
}

export default TextInput;