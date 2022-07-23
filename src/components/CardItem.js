import React from "react";
import {Card, Badge, Button} from "react-bootstrap";
import {MdAddShoppingCart} from 'react-icons/md';
import {getPrice} from  '../utils';

const imageStyle = {
    width: '100%',
    objectFit : 'contain',
    padding: 5,
    maxHeight: 200
};

function CardItem({item}){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img style={imageStyle} variant="top" src={`https://eshop.reskimulud.my.id/products/image/${item.image}`} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <h6>
                <Badge bg='secondary'>{getPrice(item.price)}</Badge>
            </h6>
            <Button>
                <MdAddShoppingCart/>
            </Button>
            </div>
            
        </Card.Body>
      </Card>
    );
}

export default CardItem;