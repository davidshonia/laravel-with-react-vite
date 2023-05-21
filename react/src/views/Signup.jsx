import {Link} from "react-router-dom";
import {useRef} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm_password: confirmPasswordRef.current.value,
        }
        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setUser(data.user)
                setUser(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.error)
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create account</h1>
                    <input placeholder="Fullname" type="text"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Password" type="password"/>
                    <input placeholder="Confirm Password" type="password"/>
                    <button className="btn btn-block">Sign Up</button>

                    <p className="message">
                        Already Registered ? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
