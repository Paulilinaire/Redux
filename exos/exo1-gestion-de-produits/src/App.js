import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="container mt-3 ">
      <h2 className='display-2 text-center mb-5'>Application de gestion de produit</h2>
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default App;
