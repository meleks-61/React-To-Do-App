import React, { useState } from "react";
import { RiQuillPenLine} from "react-icons/ri";
import { HiPlusSm } from "react-icons/hi";
import "./createTask.css";

function CreateTask({onCreate}) {
  const [text, setText] = useState("");
  const handleTextChange =(e) =>setText(e.target.value)
  const onClick= (e) =>{
      if(!text){
          alert("Please fill field")
      }else{
      e.preventDefault();
      onCreate({text,isDone:false})
      setText("")
  }
}

  
  return (
    <div className="add-task">
      <div className="add-input">
        <label for="task"><RiQuillPenLine   className="pen" /></label>
        <input
          type="text"
          id="task"
          value={text}
          name="task"
          placeholder="Add item"
          onChange={handleTextChange}
        />
        <HiPlusSm className="plus" onClick={onClick} />
      </div>
    </div>
  );
}
export default CreateTask;
