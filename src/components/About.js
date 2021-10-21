import React from 'react'

export default function About(props) {
    return (
        <div>
            <h4>About {props.title}</h4>
            <br/>
            <p>This online Text Converter allows you to change your text from UPPERCASE to lowercase, lowercase to UPPERCASE,
                 and many more with a single click. If you don't know how to convert the case or capitalization of text in Word, Notepad or other word processing software, then this online tool is designed for you.
            </p>
            <hr/>
            <li><strong>Simple UI</strong></li>
            <li><strong>Fast Enough</strong></li>
            <li><strong>Free</strong></li>
            <li><strong>No Fancy Features</strong></li>
            <li><strong>No Adds</strong></li>
        </div>
    )
}