import React, { useState } from 'react';
import './myinput.css';

export default function MyForm() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleClick = () => {
        alert(`Меня зовут ${input1} ${input2} мне ${input3}`);
        setInput1('');
        setInput2('');
        setInput3('');
    }

    return (
        <div className="form-container">
            <input type="имя" value={input1} onChange={e => setInput1(e.target.value)} />
            <input type="фамилия" value={input2} onChange={e => setInput2(e.target.value)} />
            <input type="возраст" value={input3} onChange={e => setInput3(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}
