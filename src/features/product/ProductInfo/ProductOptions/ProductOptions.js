import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { deleteProduct, editProduct } from '../../../../actions/productActions';
import { deleteProduct, editProduct } from '../../productSlice';
import { useDispatch } from 'react-redux';
import './ProductOptions.scss'

const ProductOptions = ({ data }) => {
    const dispatch = useDispatch();
    const handleOptionClick = (option) => {
        if(option == "edit"){
            dispatch(editProduct(data));
        }else if(option = "delete"){
            dispatch(deleteProduct(data));
        }
    };
  return (
    <DropdownButton id="dropdown-menu-align-right"
    title="Actions"
    menuAlign="right"
    variant="secondary"
    className="float-end actions-menu-head">
      <Dropdown.Item  className="options-dropdown-item" onClick={() => handleOptionClick('edit')}>Edit</Dropdown.Item>
      <Dropdown.Item className="options-dropdown-item" onClick={() => handleOptionClick('delete')}>Delete</Dropdown.Item>
    </DropdownButton>
  );
}

export default ProductOptions;