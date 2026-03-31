import { useState, useEffect } from "react";

export function InputPreview() {
  const programs = ["tron", "ram", "mcp"];
  const [text, setText] = useState("");
  const [list, setList] = useState(programs);

  useEffect(() => {
    document.title = `Searching: ${text}`;
  }, [text]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function clearText() {
    setText("");
  }

  const filteredPrograms = list.filter((program) => {
    if (text === "") {
      return true;
    }
    return program.includes(text);
  });

  return (
    <div>
      <h2>Live Input Preview</h2>
      <input value={text} onChange={handleChange} />
      <button onClick={clearText}>Clear</button>
      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
      <ul>
        {filteredPrograms.map((pro, i) => (
          <li key={pro + i}>{pro}</li>
        ))}
      </ul>
    </div>
  );
}
