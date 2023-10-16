import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";


const AddProduct = () => {
    const nameRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
    event.preventDefault()

    const newProduct = {
        id: Date.now(),
        name: nameRef.current.value,
        price: priceRef.current.value
    }

        dispatch(addProduct(newProduct))
    }

    return ( 
        <>
            <form action="#" onSubmit={handleSubmit}>
                <h1 className="text-center mb-3">Ajouter un produit</h1>
                <div className="col text-center mb-3">
                    <label htmlFor="productName" className="text-center">Nom du produit:</label><br />
                    <input className= "text-center" type="text" id= "productName" ref={nameRef} />
                </div>
                <div className="col text-center mb-3">
                    <label htmlFor="productPrice" className="text-center">Prix du produit:</label><br />
                    <input className="text-center" type="text"  id= "productPrice" ref={priceRef} />
                </div>
                <div className="row">
                    <button className="btn btn-success mt-3">Submit</button>
                </div>
            </form>
        </>
     );
}
 
export default AddProduct;