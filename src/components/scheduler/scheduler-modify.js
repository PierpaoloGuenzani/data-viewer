import { Button, TextField  } from "@mui/material";
import { Fragment, useState, useContext} from "react";
import { TaskContext } from "./scheduler-view";

export default function SchedulerModify()
{
    const [modifyState, setModifyState] = useState(false);
    const {task, setTask} = useContext(TaskContext);

    const handleClick = () =>
    {
        /*const obj = {
            taskName: taskName,
            schedulingInterval: schedulingInterval,
            type: schedulingType,
            state: schedulingState
        }*/
        //SOLO aggiunta custom
        fetch('http://localhost:8080/scheduler/custom', 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(task)
        }).then(response => response.ok? console.log("Sucessful") : console.error("rejected")
        ).catch(err => console.log(err))
    }

    const handleChangeTaskName = event =>
    {
        setTask({...task, taskName: event.target.value});
        setModifyState(false);
    }

    const handleChangeSchedulingInterval = event =>
    {
        setTask({...task, schedulingInterval: event.target.value});
    }

    const handleSchedulingType = event =>
    {
        setTask({...task, type: event.target.value});
    }

    const handleSchedulingState = event =>
    {
        setTask({...task, state: event.target.value});
    }

    return(
        <Fragment>
            <TextField onChange={handleChangeTaskName} placeholder="taskName" size="small"  value={task.taskName}/>
            <TextField onChange={handleChangeSchedulingInterval} placeholder="schedulingInterval" size="small" value={task.schedulingInterval}/>
            <TextField onChange={handleSchedulingType} placeholder="schedulingType" size="small" value={task.type}/>
            <TextField onChange={handleSchedulingState} placeholder="schedulingState" size="small" value={task.state}/>
            <Button onClick={handleClick} size="large" variant="contained">{modifyState? "Modifica Task" : "Crea Task"}</Button>
        </Fragment>
    );
}