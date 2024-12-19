import React from 'react'

const Update = ({display}) => {
  return (
    <div className='upd-page p-5 d-flex flex-column align-items-start'>
        <h3>
            Update your Task
        </h3>
        <input type="text" className='mt-4' />
        <textarea className='mt-2' id=""></textarea>
        <div >
            <button className='btn-updbtn my-4'>
                Update
            </button>
            <button className='btn-updbtn my-4' onClick={() => {
                display('none');
            }}>
                Close
            </button>
        </div>
        
    </div>
  )
}

export default Update