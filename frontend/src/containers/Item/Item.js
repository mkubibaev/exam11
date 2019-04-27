import React, {Component} from 'react';
import {connect} from "react-redux";

import {deleteItem, fetchItem} from "../../store/actions/itemsActions";
import {apiURL} from "../../constants";
import {Button} from "reactstrap";

class Item extends Component {
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.id);
    }

    render() {
        const item = this.props.item;

        //вопрос на вебинар ) , как лучше выводить ?
        //при первом выводе компонента, не может найти значение ключа если этот ключ объект
        const category = item.category && item.category.title;
        const sellerId = item.user && item.user._id;
        const sellerName = item.user && item.user.fullname;
        const sellerPhone = item.user && item.user.phone;

        return (
            <div>
                <h3 className="mb-3">{item.title}</h3>

                {item.image && (
                    <img src={`${apiURL}/uploads/${item.image}`} className="item-img" alt={item.title}/>
                )}

                <p><span className="text-muted">Category:</span> {category}</p>

                {item.description && (
                    <p>
                        <span className="text-muted">Description:</span><br/>
                        {item.description}
                    </p>
                )}

                <ul>
                    <li><span className="text-muted">Price:</span> {item.price} $</li>
                    <li><span className="text-muted">Seller:</span> {sellerName}</li>
                    <li><span className="text-muted">Seller phone:</span> {sellerPhone}</li>
                </ul>

                {sellerId === this.props.user._id
                    ? <Button
                        outline
                        color="danger"
                        size="sm"
                        className="mb-3"
                        onClick={() => this.props.deleteItem(this.props.match.params.id)}
                      >Delete item</Button>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.items.item,
    user: state.users.user,
    error: state.items.error,
    loading: state.items.loading
});

const mapDispatchToProps = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    deleteItem: itemId => dispatch(deleteItem(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
