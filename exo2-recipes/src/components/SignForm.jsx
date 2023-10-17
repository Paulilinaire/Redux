import { useDispatch, useSelector } from "react-redux"
import { setAuthMode, setUser } from "./auth/authSlice"
import { useRef } from "react"
import { SIGN_IN_URL, SIGN_UP_URL } from "../fireBaseConfig"


const SignForm = () => {

    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitFormHandler = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const credentials = { email, password, returnSecureToken: true }
        const URL = authMode === "Se connecter" ? SIGN_IN_URL : SIGN_UP_URL
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(credentials)
            })
            if(!response.ok) {
                throw new Error("Something went wrong during the " + authMode)
            }

            const data = await response.json()
            console.log(data);

            localStorage.setItem("token" , data.idToken)
            dispatch(setUser(data))

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <h3>Suscribe</h3>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input className= "form-control" type="email" id="email" ref={emailRef} />
                </div>
                <div className="mt-3">
                    <label htmlFor="password">Password : </label>
                    <input className= "form-control" type="password" id="password" ref={passwordRef} />
                </div>
            <div className="col mt-3">
                <button className="btn btn-primary"
                    onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
                        {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}</button>
            </div>
            </form>
        </>
    )
}

export default SignForm