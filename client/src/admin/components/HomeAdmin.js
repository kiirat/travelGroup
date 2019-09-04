import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profileAction'
import Spinner from '../../front/components/common/Spinner'

class HomeAdmin extends Component {
    componentDidMount () {
        this.props.getCurrentProfile()
    }
    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        let dashboardContent;

        
        if(profile === null || loading) {
            dashboardContent = <Spinner />
        }else{
            if(Object.keys(profile).length > 0){
                dashboardContent = <h4>Dispaly Profile</h4>
            }else{
                dashboardContent = (
                    <div>
                        <p className='lead text-muted'>Welcome {user.name}</p>
                        <p>You have not setup your profile please add some info </p>
                        <Link to='/create-profile'>
                            Create profile
                        </Link>
                    </div>
                )
            }
        }

        return (
            <div className='content-wrapper'>
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Control panel</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Home</h3>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    {dashboardContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
HomeAdmin.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,

})
export default connect(mapStateToProps, { getCurrentProfile })(HomeAdmin)
