import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

// Interfaces
import { ITask } from '../../interfaces/Task';

interface Props {
  btnText: string,
  formClass: any,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficult: number | string): void
}

const TaskForm = ({
  btnText,
  formClass,
  taskList,
  setTaskList,
  task,
  handleUpdate
}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, settitle] = useState<string>("")
  const [difficult, setDifficult] = useState<number | string>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {

      handleUpdate(id, title, difficult);

    } else {

      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficult };

      setTaskList!([...taskList, newTask]);

      settitle("");
      setDifficult(0);
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    // if(Number(isNaN(parseInt(e.target.value)))) ;

    if (e.target.name === "title") {
      settitle(e.target.value);
    } else {
      setDifficult(parseInt(e.target.value));
    }
  }

  useEffect(() => {
    if (task) {
      setId(task.id);
      settitle(task.title);
      setDifficult(task.difficult);
    }
  }, [task])


  return (
    <form
      onSubmit={addTaskHandler}
      className={formClass}
    >
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Tiulo da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficult}
        />
      </div>
      <div>
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default TaskForm;