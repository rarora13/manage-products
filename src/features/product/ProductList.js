import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import ProductBox from './ProductInfo/ProductBox';
import { Col, Row } from 'react-bootstrap';
import noProductImg from '../../assets/images/no-product.png';

const ProductList = () => {
    const products = useSelector((state) => state.productReducer.products);

    console.log("products:",products);
    const style = {
        height: 540, overflow: 'hidden', overflowY : 'scroll', paddingRight : '10px'
    } 

    return ( 
        <>
            { products.length > 0 ? <>
                <div className='product-list-section mt-4 mt-sm-0'> 
                      <h5 className='fw-bold mb-4'>Product List</h5>

                      <div style={style}>  
                            <Row className='gy-3 gx-3'>
                                    {products.map((product) => {
                                        return (
                                            <Col sm={6} key={product.productID}>
                                                <ProductBox product={product} />
                                            </Col>
                                        )
                                    })}  
                            </Row>
                      </div>
                </div>
            </> : <>
                <div className='no-product d-flex h-100 align-items-center justify-content-center flex-column gap-3 my-3 my-sm-0'>
                        <div>
                                <img width={150} src={noProductImg} />
                        </div>
                        <h5 className='mb-0'>Sorry, No Products Found</h5> 
                </div>   
            </> }
        </> 
    )
}

export default ProductList