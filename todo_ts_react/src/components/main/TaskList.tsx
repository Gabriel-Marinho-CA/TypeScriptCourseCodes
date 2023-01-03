import React from 'react'
import { ITask } from '../../interfaces/Task';

type Props = {
    taskList: ITask[],
    taskAreaClass: any,
    details: any,
    actions: any,
    handleDelete(id: number): void
}
// className ={taskAreaClass}

const TaskList = (
    {
        taskList,
        taskAreaClass,
        details,
        actions,
        handleDelete
    }
        : Props) => {


    return (
        <>
            {taskList.length > 0 ?
                (
                    taskList.map((task) => {
                        return (
                            <div key={task.id} className={taskAreaClass}>
                                <div className={details}>
                                    <h4>{task.title}</h4>
                                    <p>Dificuldade: {
                                        task.difficult > 0 ? task.difficult : 0
                                    }</p>
                                </div>
                                <div className={actions}>
                                    <i className="bi bi-pencil"></i>
                                    <i 
                                        onClick={()=> {handleDelete(task.id)}}
                                        className="bi bi-trash"></i>
                                </div>
                            </div>
                        )
                    })
                )
                :
                (<p>Nao tem tareface</p>)
            }
        </>
    )
}

export default TaskList