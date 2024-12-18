import React from 'react'
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({title, body}) => {
  return (
    <div className='todoCard p-3'>
        <div className="">
            <h5>{title}</h5>
            <p>
                {body.split('', 40)}...
            </p>
        </div>
        <div className='d-flex justify-content-around'>
            <div className='card-icon-head p-1'>
                <GrDocumentUpdate className='cardIcons upd'/><small>Update</small>
            </div>
            <div className='card-icon-head p-1 text-danger'>
                <MdDelete className='cardIcons del'/><small>Delete</small>
            </div>
        </div>
    </div>
  )
}

export default TodoCards