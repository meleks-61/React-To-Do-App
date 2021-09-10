import { useState,useEffect } from 'react';
import Header from './components/header';
import CreateTask from './components/createTask';
import TaskList from './components/taskList';
import { initialState } from './store/İnitialState';
import ananas from "./assets/ananas.jpg"
import './App.css';


 





// const newDay =() =>{
//   let tarih =new Date();
//   let gunler =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
//   let NewDate =gunler[tarih.getDay()]
//   setShowDate(NewDae)t
// }




// var tarih =new Date();
// var gunler =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log( `Happy  ` +gunler[tarih.getDay()]);



// function showTime(){

// const timeLabel = document.querySelector("h1");
//     const time = new Date();
//     timeLabel.innerHTML = time.toLocaleTimeString();
// }
//  setInterval(showTime,1000);


function App() {
     
const[showDate,setShowDate]= useState("");
const[showTime,setShowTime]=useState("")
const[showTask, setTask] =useState(initialState)

//Create Task



const onCreate =(task) =>{
  const id =Date.now()
  const NewTask ={id,...task}
  setTask((prevState) =>[...prevState,NewTask])
}//bu code ile her yazdığımız taski bir önceki yazılanla beraber(id ile) obje içerikli bir arraye depoluyoruz.

//ToggleDone(task is done or not)

const toggleDone =(id)=>{
  setTask(showTask.map((item)=>
  item.id===id ? {...item, isDone:!item.isDone}:item
  )
    )
}

//Delete a task

const onDelete =(deletedId)=>setTask((showTask.filter((item)=>item.id!==deletedId)))


useEffect(()=>{
  
  function show(){
  const time = new Date();
  const newTime=time.toLocaleTimeString()
  setShowTime(newTime)
  }
  setInterval(show,1000)


  let tarih =new Date();
  let gunler =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  let NewDate =gunler[tarih.getDay()]
  setShowDate(NewDate)
  

},[]);






  return (
    <div className="container" style={{backgroundImage:ananas}}>
      <Header title="Happy" showDate={showDate} showTime={showTime} />
      <CreateTask onCreate ={onCreate}/>
      {showTask.length>0 ?
      <TaskList showTask={showTask} toggleDone={toggleDone} onDelete={onDelete}/>
      :null
      }
      
    </div>
  );
}

export default App;
