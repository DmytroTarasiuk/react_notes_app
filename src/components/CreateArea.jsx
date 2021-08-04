import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.click}>
        <input
          name="title"
          placeholder="Title"
          value={props.inputValue}
          onChange={props.inputChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.textValue}
          onChange={props.textChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;