import React from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'

const TextFieldGroup =({
    name,
    placeholder,
    type,
    value,
    onChange,
    disabled,
    error,
    label,
    info,
    className
})=> {
    return (
        <div className={classnames('group-input',{'has-error' : error })}>
            <input type={type}  onChange={onChange} value={value}
                 className={className} name={name} placeholder={placeholder} disabled={disabled}  />
            {info && (<small className='form-text text-muted'>{info}</small>)}
            {error && (<div className="feed-back-error">{error}</div>)}
        </div>
    )
}

TextFieldGroup.propTypes = {
    name : propTypes.string.isRequired,
    placeholder : propTypes.string,
    value : propTypes.string.isRequired,
    onChange : propTypes.func.isRequired,
    disabled : propTypes.string,
    error : propTypes.string,
    info : propTypes.string,
    type: propTypes.string.isRequired
}
TextFieldGroup.defaultProps ={
    type: 'text'
}
export default TextFieldGroup