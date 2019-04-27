import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

import {apiURL} from "../../constants";

const Item = props => {
    return (
        <Col xs="12" sm="6" md="4">
            <Card className="mb-3">
                {props.image
                    ? <RouterNavLink to={`/items/${props.id}`}>
                        <CardImg top width="100%" src={`${apiURL}/uploads/${props.image}`} alt={props.title}/>
                    </RouterNavLink>
                    : null
                }
                <CardBody>
                    <CardTitle
                        tag={RouterNavLink}
                        to={`/items/${props.id}`}
                    >
                        {props.title}
                    </CardTitle>
                    <CardText>{props.price} $</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Item;
