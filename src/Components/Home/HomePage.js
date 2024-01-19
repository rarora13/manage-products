import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddProductForm from '../Form/AddProductForm'; 
import './HomePage.scss'; 
import ProductList from '../Products/ProductList';

const HomePage = () => {
    return (
        <>
            <div className='main-section py-4 py-sm-5'>
                <Container className='py-3 py-sm-2 mb-4'>
                    <Row>
                        <Col>
                              <h3 className='text-uppercase text-white fw-semibold'>Product Information</h3>
                        </Col> 
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                        <Col>
                              <div className='bg-section p-4'>
                                    <Row>
                                        <Col sm={4}>
                                            <AddProductForm />
                                        </Col>
                                        <Col sm={8}>
                                            <ProductList />
                                        </Col>
                                    </Row>
                              </div>
                        </Col> 
                </Row>
            </Container> 
        </>
    )
}

export default HomePage