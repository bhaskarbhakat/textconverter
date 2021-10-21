import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const convertToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        let newText = '';
        setText(newText);
    }

    const reverseText = () => {
        let newText = text.split("").reverse().join("");;
        setText(newText);
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const copyText = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <h4>{props.heading}</h4>
            <div className="mb-2">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary btn-sm mx-1 my-2" onClick={convertToUpper}>Convert to uppercase</button>
            <button className="btn btn-primary btn-sm mx-1 my-2" onClick={convertToLower}>Convert to lowercase</button>
            <button className="btn btn-primary btn-sm mx-1 my-2" onClick={reverseText}>Reverse your text</button>
            <button className="btn btn-primary btn-sm mx-1 my-2" onClick={removeExtraSpace}>Remove extra spaces</button>
            <button className="btn btn-primary btn-sm mx-1 my-2" onClick={copyText}>Copy</button>
            <button className="btn btn-primary btn-sm mx-1 my-2" onClick={clearText}>Clear</button>
            <div className="container my-2">
                <h4>Your Text Summary</h4>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words | {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    )
}
