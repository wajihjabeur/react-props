import React from 'react'
import propTypes from "prop-types"
function Profilecomponent(props) {
    return (
        <div>
            {props.handleAlert(props.fullname)}
            <h1>{props.fullname}</h1>
            <h2 style={{color:'red'}}>{props.bio}</h2>
            <h3>{props.profession}</h3>
            {props.children}
        </div>
    )
}
Profilecomponent.defaultProps={
    fullname:"default name"
}
Profilecomponent.propTypes ={
    fullname:propTypes.string,
    bio:propTypes.string.isRequired,
    profession:propTypes.string,
    handleAlert:propTypes.func,


    
}


export default Profilecomponent
