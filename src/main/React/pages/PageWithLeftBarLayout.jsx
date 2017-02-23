import React from 'react'

import {connect} from 'react-redux'

import { browserHistory, Link } from 'react-router'
import {NavBar} from 'components/NavBar'
import SideBar from 'components/SideBar'
import Footer from 'components/Footer'


export class PageWithLeftBarLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="wrapper">
            <SideBar />
            <div className="main-panel">
                <NavBar />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        </div>
    }
}

