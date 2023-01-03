import React, { useState } from 'react';

// Components
import Footer from './components/footer/Footer';
import TaskForm from './components/main/TaskForm';
import Header from './components/header/Header';
import TaskList from './components/main/TaskList';

// CSS
import styles from "./scss/main/App.module.css";

// Interfaces

import { ITask } from './interfaces/Task';

function App() {


  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask =(id:number) => {
    setTaskList (
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }


  return (
    <div className="App">
      <Header />

      <main className={styles.main}>

        <div>
          <h2>O que você deseja fazer?</h2>
          <TaskForm
            taskList={taskList}
            formClass={styles.form}
            setTaskList={setTaskList}
            btnText='Criar Tarefa'
          />
        </div>

        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList
            handleDelete={deleteTask}
            details={styles.details}
            actions={styles.actions}
            taskList={taskList}
            taskAreaClass={styles.taskAreaClass}
          />
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
