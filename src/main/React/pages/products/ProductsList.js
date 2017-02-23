import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions/products'

import ProductTable from 'components/products/ProductTable'

class ProductsListCmp extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        this.props.loadAllProducts()
    }

    getProducts(){
        if(!this.props.products){
            return []
        }

        return this.props.products
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ProductTable products = {this.getProducts()}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
};


function mapStateToProps(state) {
    return {
        needRefresh: state.product.get('needRefresh'),
        products: state.product.get('products')
    }
}

export const ProductsList = connect(mapStateToProps, actionCreators)(ProductsListCmp)