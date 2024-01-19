import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './AddProductForm.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/productActions';
import { v4 as uuidv4 } from 'uuid';

const AddProductForm = () => {
    // State variable for form fields
    const [formData, setFormData] = useState({
        productName: '',
        canExpire: false,
        productType: '',
        productPrice: '',
        isSpecial: false,
        expiryDate: '',
    });

    const dispatch = useDispatch();

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            productName: formData.productName,
            canExpire: formData.canExpire,
            productType: formData.productType,
            productPrice: parseInt(formData.productPrice),
            isSpecial: formData.isSpecial,
            expiryDate: formData.expiryDate,
            productID: uuidv4(),
        };

        dispatch(addProduct(payload));

        // Clear the form after dispatch
        setFormData({
            productName: '',
            canExpire: false,
            productType: 'vegetables',
            productPrice: '',
            isSpecial: false,
            expiryDate: '',
        });
    };
 

    return (
        <div className='add-product'>
            <h5 className='fw-bold mb-4'>Add Product</h5>

            <div className="product-form-section">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product name"
                            value={formData.productName}
                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                        />
                    </Form.Group>
  
                    <Form.Group className="mb-3 d-flex gap-3"> 
                        <Form.Label>Can Expire</Form.Label>
                        <Form.Check
                            type="switch"
                            label="" 
                            checked={formData.canExpire}
                            onChange={(e) => setFormData({ ...formData, canExpire: e.target.checked })}
                        />
                    </Form.Group>

                    {formData.canExpire && (
                        <Form.Group className="mb-4">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={formData.expiryDate}
                                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                            />
                        </Form.Group>
                    )}

                    <Form.Group className="mb-4">
                        <Form.Label>Product Type</Form.Label>
                        <Form.Control
                            as="select"
                            custom="true"
                            value={formData.productType}
                            onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                        >
                            <option value={''}>Select Type</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Meat">Meat</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Electronics">Electronics</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product price"
                            value={formData.productPrice}
                            onChange={(e) => setFormData({ ...formData, productPrice: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex gap-3"> 
                        <Form.Label>Special</Form.Label>
                        <Form.Check
                            type="switch"
                            label="" 
                            checked={formData.isSpecial}
                            onChange={(e) => setFormData({ ...formData, isSpecial: e.target.checked })}
                        />
                    </Form.Group>
  
                    <div className="d-grid">
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={
                                !formData.productName.trim() ||
                                !formData.productType.trim() ||
                                !formData.productPrice.trim() ||
                                (formData.canExpire && !formData.expiryDate.trim())
                            }
                        >
                            Add Product
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddProductForm;