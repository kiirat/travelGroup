import React, { Component } from 'react'
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import Footer from './layouts/Footer'
import DataTable from './components/DataTable'

class IndexAdmin extends Component {
    render() {
        return (
        
        <div className="wrapper admin-view">
            <Header/>
            <Menu/>
            <DataTable />
            <Footer/>
        </div>

        )
    }
}
export default IndexAdmin
