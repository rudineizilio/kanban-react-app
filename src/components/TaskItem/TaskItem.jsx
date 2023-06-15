import PropTypes from 'prop-types';
import { useState } from 'react';

import './taskitem.scss';

function TaskItem({
  taskId,
  taskTitle,
  taskState,
  onTaskUpdate,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(taskTitle);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(taskId);
      }
    }
  };

  const onTaskStateChange = (event) => {
    console.log(event.target.value);
    onTaskUpdate(taskId, taskTitle, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyUp={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskTitle: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
