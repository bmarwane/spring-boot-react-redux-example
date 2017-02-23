import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions/products'
import { hashHistory } from 'react-router'


import ProductForm from 'components/products/ProductForm'

class EditProductCmp extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidUpdate(prevProps){
        if(this.props.savedProduct && this.props.savedProduct !== prevProps.savedProduct){
            hashHistory.push('/products')
        }
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ProductForm saveProduct = {this.props.saveProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
};


function mapStateToProps(state) {
    return {
        savedProduct: state.product.get('saved')
    }
}

export const EditProduct = connect(mapStateToProps, actionCreators)(EditProductCmp)