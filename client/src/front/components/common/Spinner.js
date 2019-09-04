import React, { Component } from 'react'
import Spinner from '../../images/spinner.gif'

export default ()=> {
    return (
        <div>
            <img 
                src={Spinner}
                style={{width: '200px', margin: 'auto', display: 'block'}}
            />
        </div>
    )
    
}
