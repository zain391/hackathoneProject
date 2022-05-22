import React from 'react'
import './Form-input.style.scss'
const FormInputComponent = ({handlechange,label,...otherProps}) => {
  return (
    <div className='group'>
        <input type="text" className="form-input" onChange={handlechange} {...otherProps}/>
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' :''}`}>

            </label>):
            null
        }
    </div>
  )
}

export default FormInputComponent;