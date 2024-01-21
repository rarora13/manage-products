import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ProductBox.scss';
import { Col, Row } from 'react-bootstrap';
import ProductOptions from './ProductOptions/ProductOptions';
import CategoryIcon from '../../../assets/images/tag.svg';
import PriceIcon from '../../../assets/images/price.svg';
import StarIcon from '../../../assets/images/star.svg';
import DateIcon from '../../../assets/images/date.svg';

const ProductBox = ({ product }) => {

  return (
    <Card className='product-card'>
      <Card.Body>
        <Row className='gap-1 gap-sm-0'>
          <Col xs={12}>
            <Card.Title className="d-flex align-items-center">
              <div className="flex-grow-1 overflow-hidden">
                {product.productName}
              </div>
              <ProductOptions data={product} />
            </Card.Title>
          </Col>
        </Row>
        <Row className='gap-1 gap-sm-0'>
          <Col xs sm={12} md={6}>
            <Card.Text>
              <img src={PriceIcon} />
              {product.productPrice ? product.productPrice.toFixed(2) : null}
            </Card.Text>
          </Col>
          <Col xs sm={12} md={6}>
            <Card.Text>
              <img src={CategoryIcon} />
              {product.productType}
            </Card.Text>
          </Col>
        </Row>
        <Row className='py-1'>
          <Col xs sm={12} md={9}>
            <Card.Text>
              <img src={DateIcon} /> {product.canExpire == true ? product.expiryDate : 'No Expiry'}
            </Card.Text>
          </Col>
          {product.isSpecial == true ? (
            <Col xs sm={12} md={3}>
              <Card.Text className='text-end'>
                <img src={StarIcon} />
              </Card.Text>
            </Col>
          ) : null}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;