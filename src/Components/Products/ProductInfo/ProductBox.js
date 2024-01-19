import React from 'react'
import Card from 'react-bootstrap/Card';
import './ProductBox.scss'
import { Col, Row } from 'react-bootstrap'; 

import CategoryIcon from '../../../assets/images/tag.svg';
import PriceIcon from '../../../assets/images/price.svg';
import StarIcon from '../../../assets/images/star.svg';
import DateIcon from '../../../assets/images/date.svg';

const ProductBox = ({data}) => {  
    return (
        <Card className='product-card'> 
            <Card.Body>
                <Card.Title>
                      {data.productName}
                </Card.Title>
                <Row className='gap-1 gap-sm-0'>
                      <Col xs sm={12} md={6}>
                            <Card.Text>
                                <img src={PriceIcon} /> 
                                {data.productPrice ? data.productPrice.toFixed(2) : null}     
                            </Card.Text> 
                      </Col>
                      <Col xs sm={12} md={6}>
                            <Card.Text>
                                <img src={CategoryIcon} />
                                {data.productType} 
                            </Card.Text>
                      </Col>
                </Row>
                <Row className='py-1'>
                      <Col xs sm={12} md={9}>
                            <Card.Text>
                                <img src={DateIcon} /> {data.canExpire == true ? data.expiryDate : 'No Expiry'}     
                            </Card.Text>
                      </Col>
                      { data.isSpecial == true ? <>
                            <Col xs sm={12} md={3}>
                                  <Card.Text className='text-end'>
                                       <img src={StarIcon} />     
                                  </Card.Text>
                            </Col>
                      </> : null }
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductBox