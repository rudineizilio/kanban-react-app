import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';

import './styles.scss';

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title={'Pendente'}
          taskState={'Pendente'}
          tasks={tasks.filter((task) => task.state === 'Pendente')}
          onAddTask={addTask}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={'Fazendo'}
          taskState={'Fazendo'}
          tasks={tasks.filter((task) => task.state === 'Fazendo')}
          onAddTask={addTask}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={'Completa'}
          taskState={'Completa'}
          tasks={tasks.filter((task) => task.state === 'Completa')}
          onAddTask={addTask}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
