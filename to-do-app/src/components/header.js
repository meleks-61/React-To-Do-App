import React from 'react'
import {useState} from 'react'
import { SiCoffeescript } from 'react-icons/si';
import { GiTimeBomb} from 'react-icons/gi';
import "./header.css"

 function Header({title,showDate,showTime}) {
  return (
    <div className="header">
        <h2 >{title} {showDate+ "     "}  <SiCoffeescript className="cofee"/>
        
        </h2>
        <h3>
          {showTime + "     " }
          <GiTimeBomb className="clock"/>
        </h3>

        
      
    </div>
  )
}
export default Header;
