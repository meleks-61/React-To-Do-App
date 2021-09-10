import React from "react";
import {BiCheckbox} from "react-icons/bi";
import {FiCheck} from "react-icons/fi";
import {TiTimes} from "react-icons/ti";
import { RiQuillPenLine} from "react-icons/ri";
import "./taskItem.css"







const TaskItem=({item,toggleDone,onDelete,color}) =>{



   

    return(
        <div className="task">
        <div className="taskitem"  style={{background:color}}  >
        
              

            <h6 className={`${item.isDone ? "overline": ""}`} style={ { color:"purple"} }>
            {!item.isDone?
                
                <RiQuillPenLine className="kutu" onClick={()=>toggleDone(item.id)}  style={{ color:"lightgrey",cursor:"pointer"}}/>
                :
                <FiCheck className="tic"onClick={()=>toggleDone(item.id)} style={{ color:"purple",cursor:"pointer"}} />
              }
           
           
              {"  " + item.text} 
              


            </h6>
            <TiTimes className="times" onClick={()=>onDelete(item.id)} style={ !item.isDone ?{ color:"lightgrey",cursor:"pointer"} : {color:"purple",cursor:"pointer"}}/>



        </div>
        </div>




    )
}
export default TaskItem;