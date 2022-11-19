import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'

export default function App() {
  const title = "Task tracker"
  const onAdd = (e) => {
    e.preventDefault()
    console.log("on click")
  }
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Doing laundry",
      done: false
    }, 
    {
      id: 2,
      name: "Shopping",
      done: false
    }
  ])

  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleDone = (id) => {
    let localTasks = [...tasks]
    localTasks.forEach(task => {
      if(task.id === id){
        task.done = !task.done
      }
    })
    setTasks(localTasks)
  }

  return (
    <div className="App">
      <Header title={title} onAdd={onAdd}/>
      <Tasks tasks={tasks} onDelete={onDelete} toggleDone={toggleDone}/>
    </div>
  )
}
