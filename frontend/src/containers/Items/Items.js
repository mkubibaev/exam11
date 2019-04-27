import React, {Component} from 'react';
import {connect} from "react-redux";
import {Row} from "reactstrap";

import {fetchItems} from "../../store/actions/itemsActions";
import Item from "../../components/Item/Item";

class Items extends Component {

    componentDidMount() {
        this.props.fetchItems(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchItems(this.props.match.params.id);
        }
    };

    render() {
        return (
            <Row>
                {this.props.items.map(item => (
                    <Item
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    error: state.items.error,
    loading: state.items.loading
});

const mapDispatchToProps = dispatch => ({
    fetchItems: categoryId => dispatch(fetchItems(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
