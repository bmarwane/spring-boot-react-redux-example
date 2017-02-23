import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return <table className="table table-stripped table-bordered">
            <thead>
            <tr>
                <th>Product name</th>
            </tr>
            </thead>
            <tbody>
            {this.props.products.map(product => <tr key={product.get('name')}>
                <td>{product.get('name')}</td>
            </tr>)}

            </tbody>
        </table>

    }
}
