import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions'

import { browserHistory } from 'react-router'


export class SomePageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {

        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            Basic panel example
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}


function mapStateToProps(state) {
    return {

    }
}

export const SomePage = connect(mapStateToProps, actionCreators)(SomePageContainer)

