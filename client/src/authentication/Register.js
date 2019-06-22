import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { registerUser } from '../actions/authAction';
import { withRouter } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }

    }
    componentDidMount () {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/admin')
        }
    }
    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors })
        }

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registerUser(newUser, this.props.history)
        // axios
        //     .post('/api/users/register', newUser)
        //     .then(res => console.log(res.data))
        //     .catch(error => {
        //         this.setState({errors: error.response.data})
        //         console.log(this.state.errors)
        //     })

        


    }
    
    render() {
        const {errors} = this.state;
        return (
            <div className="wrapper-login fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}
                    {/* Icon */}
                    <div className="fadeIn first">
                        <img src={require('../front/images/new_user.png')} width={100} />
                    </div>
                    {/* Login Form */}
                    <form onSubmit={this.onSubmit}>
                        <div className={classnames('group-input',{'has-error' : errors.name, })}>
                            <input type="text" onChange={this.onChange}
                            id="name" value={this.state.name} className="fadeIn second form-control" name="name" placeholder="Name" />
                            {errors.name && (<div className="feed-back-error">{errors.name}</div>)}
                        </div>
                        <div className={classnames('group-input',{'has-error' : errors.email})}>
                            <input type="text" onChange={this.onChange} id="Email" value={this.state.email} className="fadeIn third  form-control" name="email" placeholder="Email" />
                            {errors.email && (<div className="feed-back-error">{errors.email}</div>)}
                        </div>
                        <div className={classnames('group-input',{'has-error' : errors.password})}>
                            <input type="password" onChange={this.onChange}  value={this.state.password} id="password" className="fadeIn third  form-control" name="password" placeholder="password" />
                            {errors.password && (<div className="feed-back-error">{errors.password}</div>)}
                        </div>
                        <div className={classnames('group-input',{'has-error' : errors.password2})}>
                            <input type="password" onChange={this.onChange}  id="password2" value={this.state.password2} className="fadeIn third  form-control" name="password2" placeholder="password2" />
                            {errors.password2 && (<div className="feed-back-error">{errors.password2}</div>)}
                        </div>
                        <div>
                            <input type="submit"  onChange={this.onChange} className="fadeIn fourth" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
Register.protoTypes = {
    registerUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { registerUser })(withRouter(Register))