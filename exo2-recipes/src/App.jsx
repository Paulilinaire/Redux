import { Link, NavLink, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


function App() {

  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">eRecipes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={`/`}>Home</NavLink>
              </li>
              <li className="nav-item text-end">
                <NavLink className="nav-link" to={`/signForm`}>Sign In</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main className="container mt-3">
      <div className="col-10 offset-1 rounded p-3 bg-dark text-light">
          <Outlet />
      </div>
    </main>
  </div>
  );
}

export default App;
