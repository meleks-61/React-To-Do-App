import React from 'react';
import TaskItem from './taskItem';

const TaskList = ({showTask,toggleDone,onDelete}) => {
  return (
    <div className="taskList">
        {showTask.map((item)=>(
            <TaskItem key={item.id} item={item} toggleDone={toggleDone} onDelete={onDelete} color={!item.isDone? "violet" :"lightblue"} />
        ))}
      
    </div>
  )
}

export default TaskList;
