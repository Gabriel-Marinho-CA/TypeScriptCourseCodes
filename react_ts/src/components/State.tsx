import React, { useState, ChangeEvent } from 'react'


function State() {

    const [text,setText] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent <HTMLInputElement>) => {
        setText(e.target.value);
    }

  return (
    <div>
        <hr></hr>
        <p>O texto é : </p>
        <p>{text}</p>

        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State