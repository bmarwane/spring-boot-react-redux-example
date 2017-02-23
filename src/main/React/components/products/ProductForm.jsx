import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        this.props.saveProduct({name: this.refs.name.value})
    }

    render() {

        return <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
                <label>Product name</label>
                <input className="form-control" ref="name" />
            </div>
            <button type="submit" className="btn btn-fill btn-primary">Save</button>
        </form>
    }
}
