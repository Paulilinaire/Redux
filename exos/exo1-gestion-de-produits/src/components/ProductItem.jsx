import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./productSlice";
import { useRef, useState } from "react";

const ProductItem = (props) => {
    const product = props.product
    const nameRef = useRef()
    const priceRef = useRef()
    const [update, setUpdate] = useState(false)
    const dispatch = useDispatch()

    const updateProductHandler = (event) => {
        event.preventDefault()

        const newName = nameRef.current.value ? nameRef.current.value : product.name // si le user ne change pas le nom, le produit reprend son nom initial
        const newPrice = priceRef.current.value ? priceRef.current.value : product.price // idem pour le prix

        const updatedProduct = {
            id: product.id,
            name: newName,
            price : newPrice
        }

        dispatch(updateProduct(updatedProduct))
        setUpdate(!update)

    }

    return ( 
        <> 
        {
            update ?
            <tr>
                <td> <input type="text" placeholder={product.name} className="form-control" ref={nameRef} defaultValue={product.name}/></td>
                <td> <input type="number" placeholder={product.price} className="form-control" ref={priceRef} defaultValue={product.price}/></td>
                <td>
                    <button onClick= {updateProductHandler} className="btn btn-success me-2">Valider</button>
                    <button onClick= {() => setUpdate(!update)} className="btn btn-danger">Annuler</button>
                </td>
            </tr>

            :   

            <tr>
                <td>{product.name}</td>
                <td>{product.price}€</td>
                <td>
                    <button className="btn btn-warning me-2" onClick={() => setUpdate(!update)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
                </td>
            </tr>
        }
        </>
     );
}
 
export default ProductItem;