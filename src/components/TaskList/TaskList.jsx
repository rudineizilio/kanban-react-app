import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import PlusIcon from '../../img/plus-icon.svg';

import './tasklist.scss';

function TaskList({
  title,
  taskState,
  tasks,
  onAddTask,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask('Nova Tarefa', taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={PlusIcon} alt="plus" />
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
