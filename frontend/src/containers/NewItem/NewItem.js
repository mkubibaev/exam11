import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {addItem} from "../../store/actions/itemsActions";
import ItemForm from "../../components/ItemForm/ItemForm";

class NewItem extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="mb-4">Add new item</h2>
                <ItemForm
                    categories={this.props.categories}
                    addItem={this.props.addItem}
                    error={this.props.error}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    error: state.items.error
});

const mapDispatchToProps = dispatch => ({
    addItem: itemData => dispatch(addItem(itemData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
