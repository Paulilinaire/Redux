import { useDispatch, useSelector } from "react-redux";
import { removeUser, setAuthMode } from "../auth/authSlice";
import Modal from "./Modal";
import SignForm from "../auth/SignForm";

const NavBar = () => {
    const user = useSelector(state => state.auth.user)
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    return ( 
        <>
        {
            authMode && (
                <Modal onClose={() => dispatch(setAuthMode(""))}>
                    <SignForm/>
                </Modal>
            )
        }
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand"><i class="bi bi-file-music-fill me-2"></i>eAlbums</span>
                    <button 
                        onClick={() => !user ? dispatch(setAuthMode("Log in")) : dispatch(removeUser())}
                        className="ms-auto btn btn-secondary"
                    >
                        {user ? "Log out" : "Log in"}
                    </button>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;