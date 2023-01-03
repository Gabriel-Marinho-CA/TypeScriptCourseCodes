import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

// Interfaces
import { ITask } from '../../interfaces/Task';

type Props = {
  btnText: string,
  formClass: any,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, formClass, taskList,setTaskList }: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, settitle] = useState<string>("")
  const [difficult, setDifficult] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random()*1000);

    const newTask:ITask = {id,title,difficult};

    setTaskList!([...taskList, newTask]);

    settitle("");
    setDifficult(0);

    console.log(taskList);
    

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.name === "title") {
      settitle(e.target.value);
    } else {
      setDifficult(parseInt(e.target.value));
    }
  }


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