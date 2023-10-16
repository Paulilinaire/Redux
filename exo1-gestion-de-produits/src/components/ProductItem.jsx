import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "./productSlice";

const ProductItem = (props) => {
    const product = props.product
    const dispatch = useDispatch()

    return ( 
        <> 
            <tr>
                <td>{product.name}</td>
                <td>{product.price}€</td>
                <td>
                    <button className="btn btn-primary mx-2" onClick={() => dispatch(editProduct(product.id))}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
                </td>
            </tr>
        </>
     );
}
 
export default ProductItem;