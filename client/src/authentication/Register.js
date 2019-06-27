import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { registerUser } from '../actions/authAction';
import { withRouter } from 'react-router-dom'
import TextFieldGroup from '../front/components/TextFieldGroup'


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

                        <TextFieldGroup 
                            type='text'
                            onChange={this.onChange}
                            placeholder='name'
                            value={this.state.name}
                            error={errors.name}
                            name='name'
                            className='fadeIn second'
                        />
                       


                        <TextFieldGroup 
                            type='email'
                            onChange={this.onChange}
                            placeholder='Email'
                            value={this.state.email}
                            error={errors.email}
                            name='email'
                            className='fadeIn third'
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

                       
                        <TextFieldGroup 
                            type='password'
                            onChange={this.onChange}
                            placeholder='password confirm'
                            value={this.state.password2}
                            error={errors.password2}
                            name='password2'
                            className='fadeIn third'
                        />
                        
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