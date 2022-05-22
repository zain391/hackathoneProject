import React from 'react'
import '../menu-items/menu-item.styles.scss'
import { useNavigate } from 'react-router-dom';
function Menuitem({title,imageUrl,id,size}) {
    const navigate=useNavigate()
    return (
    <div className={`menu-item ${size}`} onClick={()=>navigate('/hats')}>
    
            <div className="background-Image "  style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className="content">
            <h1 className="title"> {title}</h1>
            <span className="subtitle">Show Now</span>
        </div>
    </div>

    )
}

export default Menuitem;