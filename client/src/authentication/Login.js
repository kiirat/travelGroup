import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authAction'

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
                        <div className={classnames('group-input',{'has-error' : errors.name, })}>
                            <input type="text" id="email"   onChange={this.onChange} value={this.state.email} className="fadeIn second" name="email" placeholder="Email"  />
                            {errors.name && (<div className="feed-back-error">{errors.name}</div>)}
                        </div>
                        <div className={classnames('group-input',{'has-error' : errors.name, })}>
                            <input type="Password" id="password"  onChange={this.onChange} className="fadeIn third" name="password" placeholder="Password"  />
                            {errors.name && (<div className="feed-back-error">{errors.name}</div>)}
                        </div>
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