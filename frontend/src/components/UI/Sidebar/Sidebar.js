import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const Sidebar = ({categories}) => {
    return (
        <ListGroup>
            <ListGroupItem tag={RouterNavLink} to='/' exact>All items</ListGroupItem>

            {categories.map(category => (
                <ListGroupItem
                    key={category._id}
                    tag={RouterNavLink}
                    to={`/categories/${category._id}`}
                >
                    {category.title}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Sidebar;
