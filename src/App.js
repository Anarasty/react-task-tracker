import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'House clean',
        day: '9 September at 12:00',
        reminder: true,
    },
    {
        id:2,
        text: 'Feed the cat',
        day: '2 November at 9:00',
        reminder: true,
    },
    {
        id:3,
        text: 'Make homework',
        day: '14 December at 15:00',
        reminder: false,
    },
])

//Delete Task
const deleteTask = (id) => {
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}></Tasks> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
