import { useRef } from "react";

export default function Contact() {
    const inputRef = useRef(null);

    function handleFocusClick() {
        inputRef.current.focus();
    }

    return <>
        <h1>Contact</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocusClick}>
            focus input
        </button>
    </>;
}