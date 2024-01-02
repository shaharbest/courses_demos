import { useRef } from "react";

// uncontrolled element practice
export default function ShaharForm() {
    const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        alert(inputRef.current.value);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>submit</button>
    </form>
}

















// import { useState } from "react";

// controlled element practice
// export default function ShaharForm() {
//     const [inputVal, setInputVal] = useState('');

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert(inputVal);
//     }

//     const isBad = inputVal === 'nisim';
//     const inputStyle = { backgroundColor: isBad ? 'red': 'green' };

//     return <form onSubmit={handleSubmit}>
//         <input type="text" value={inputVal}
//             style={inputStyle}
//             onChange={e => setInputVal(e.target.value)} />
//         <button>submit</button>
//     </form>
// }