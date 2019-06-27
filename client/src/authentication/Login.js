import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authAction'
import TextFieldGroup from '../front/components/TextFieldGroup'

class Login extends Component {
    constructor () {
        super();
        this.state = {
            email : '',
            password: '',
            errors: {}
        }
    }
    componentDidMount () {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/admin')
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.auth.isAuthenticated) {
            // this.props.history.push('/admin')
            window.location.href= '/admin'
        }
        if(nextProps) {
            this.setState({errors: nextProps.errors})
        }
    }
    onChange =(e)=> {
        this.setState({[e.target.name] : e.target.value })
    }
    onSubmit =(e)=> {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(user)
    }

    render() {
        const {errors} = this.state
        console.log(errors)
        return (
            <div className="wrapper-login fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}
                    {/* Icon */}
                    <div className="fadeIn first">
                        <img src={require('../front/images/login-icon.png')} width={100} />
                    </div>
                    {/* Login Form */}
                    <form onSubmit={this.onSubmit}>                     
                        <TextFieldGroup 
                            type='text'
                            onChange={this.onChange}
                            placeholder='Email'
                            value={this.state.email}
                            error={errors.email}
                            name='email'
                            className='fadeIn second'
                        />

                        <TextFieldGroup 
                            type='password'
                            onChange={this.onChange}
                            placeholder='Password'
                            value={this.state.password}
                            error={errors.password}
                            name='password'
                            className='fadeIn third'
                        />
                        <input type="submit" onChange={this.onChange} className="fadeIn fourth" defaultValue="Log In" />
                    </form>
                    {/* Remind Passowrd */}
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>

        )
    }
}
Login.protoTypes = {
    loginUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, {loginUser})(Login)