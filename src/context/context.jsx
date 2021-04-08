import React, { useContext, useEffect, useState } from 'react'

const TaskContext = React.createContext()

export function useTasks() {
    return useContext(TaskContext)
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [temp,setTemp] = useState(false)

    function addTasks(task){
        setTasks([{
            date: new Date(),
            text: task,
            completed: false,
          },
        ...tasks
        ])

    }
    function toogleComplete(i){
        
    
        const newTasks = tasks;
        newTasks[i].completed = !newTasks[i].completed;
        newTasks[i].date = new Date()
        
        setTasks(newTasks)
        setTemp(!temp)
    }

    function onDelete(i){

        const newTasks = tasks;
        newTasks.splice(i, 1);
        setTasks(newTasks)
        setTemp(!temp)

    }

    useEffect(()=>{

    }, [temp])

    const value = {
        
        addTasks,
        tasks,
        toogleComplete,
        onDelete

    }
    return (
        <TaskContext.Provider value={value} >
        {children}            
        </TaskContext.Provider>
    )
}