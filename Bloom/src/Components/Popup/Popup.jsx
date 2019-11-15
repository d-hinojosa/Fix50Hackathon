import React from 'react'
import './popup.scss'

const Popup = (props) =>{
    const { isOn, clicked, header } = props
    return (
        <div className="Popup" style={{display: `${isOn ? 'block' : 'none'}`}}>
            <div className="Popup_exit" onClick={ clicked }><span>x</span></div>
            <div className="Popup-type"><h2>{header}</h2></div>
            {props.children}
        </div>
    )
}

export default Popup