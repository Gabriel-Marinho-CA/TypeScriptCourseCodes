import React, { useState } from 'react';

// Components
import Footer from './components/subtemplates/Footer';
import TaskForm from './components/main/TaskForm';
import Header from './components/subtemplates/Header';
import TaskList from './components/main/TaskList';

// CSS
import styles from "./scss/main.module.css";

// Interfaces

import { ITask } from './interfaces/Task';
import Modal from './components/main/Modal';

function App() {


  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const editTask = (task: ITask): void => {
    handleModalEvent(true);
    setTaskToUpdate(task);
  }

  const handleModalEvent = (display: boolean) => {
    const modal = document.querySelector("#modal");
    display ? modal!.classList.remove("hide") : modal!.classList.add("hide");
  }


  const updateTask = (id: number, title: string, difficult: number | string): void => {

    const updatedTask: ITask = { id, title, difficult };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    });

    setTaskList(updatedItems);

    handleModalEvent(false)

  }



  return (
    <div className="App">

      {/* MODAL START */}
      <Modal
        children={
          <TaskForm
            formClass={styles.form}
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
        modal={styles.modal}
        fade={styles.fade}
      />
      {/* MODAL END */}


      {/* HEADER START */}

      <Header
        header={styles.header}
      />

      {/* HEADER END */}


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
            handleEdit={editTask}
            taskAreaClass={styles.taskAreaClass}
          />
        </div>

      </main>

      {/* FOOTER START */}

      <Footer
        footer={styles.footer}
      />

      {/* FOOTER END */}

    </div>
  );
}

export default App;
