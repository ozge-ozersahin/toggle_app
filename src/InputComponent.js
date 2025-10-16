import { useState } from "react"

const InputComponent = () => {
    const [inputText, setText] = useState("hello");

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e);
    }

    return(
        <div>
            <input value={inputText} onChange={handleChange}></input>
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>Reset</button>
        </div>
    );
}

export default InputComponent;