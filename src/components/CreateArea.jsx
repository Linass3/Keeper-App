import React, { useState } from "react";

function CreateArea(props) {
  const [fullNotes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(fullNotes);
    event.preventDefault();
    setNotes({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={fullNotes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={fullNotes.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
