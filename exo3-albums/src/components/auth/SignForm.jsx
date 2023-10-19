import { useDispatch, useSelector } from "react-redux";
import { setAuthMode } from "./authSlice";
import { useRef } from "react";
import { postSetUserSignin,postSetUserSignup } from "./authSlice";

const SignForm = () => {
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitFormHandler = async (event) => {
        event.preventDefault()

        console.log("envoyer data");
        const credentials = {
            email : emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
        {authMode === "Log in" ?  (dispatch(postSetUserSignin(credentials))) : (dispatch(postSetUserSignup(credentials)))}

    }

    return ( 
        <>
            <h3>{authMode}</h3>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="email">Email: </label>
                    <input className="form-control" type="email" id="email"  ref={emailRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password: </label>
                    <input className="form-control" type="password" id="password" ref={passwordRef} />
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-outline-primary me-2">{authMode}</button>
                    <button className="btn btn-primary"
                        onClick={() => dispatch(setAuthMode(authMode === "Log in" ? "Sign up" : "Log in"))}>
                            {authMode === "Log in" ? "Sign up" : "Log in"}
                    </button>
                </div>
            </form>
        </>
     );
}
 
export default SignForm;