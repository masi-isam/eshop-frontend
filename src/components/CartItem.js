import React from "react";
import {Button, Card, Col, Row} from 'react-bootstrap';
import {MdDelete} from 'react-icons/md';
import { getPrice } from "../utils";

function CartItem({item}){
    return(
        <Card className="p-3 mt-3 ">
            <Row>
                <Col className="col-1">
                    <Card.Img src={item.image}/>
                </Col>
                <Col className="col-10">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle>{getPrice(item.price)}</Card.Subtitle>
                    <Card.Text>qty : 1</Card.Text>
                </Col>
                <Col className="col-1 d-flex justify-content-center align-items-center">
                    <Button>
                    <MdDelete/>
                    </Button>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItem;