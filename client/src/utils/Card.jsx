import React from 'react'
import {UserGroupIcon} from "@heroicons/react/24/solid"

const Card = ({text,icon,onClick}) => {
  return (
    <div onClick = {onClick} className='h-32  w-32 m-10 bg-teal-200 shadow-sm shadow-purple-200 flex flex-col justify-center items-center rounded-md hover:bg-gray-400' >
        {/* <UserGroupIcon className='h-10 '/> */}
        {icon}
        
        
        <p>{text}</p>
    </div>
    
  )
}

export default Card