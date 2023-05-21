import {Link} from "react-router-dom";

export default function Login() {
    const onSubmit = (ev) => {
        ev.preventDefault()
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Log in into your account</h1>
                    <input placeholder="email" type="email"/>
                    <input placeholder="password" type="password"/>
                    <button className="btn btn-block">Sign in</button>

                    <p className="message">
                        Not Registered ? <Link to="/signup">Create Accoutn</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
