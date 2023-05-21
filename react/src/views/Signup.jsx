import {Link} from "react-router-dom";

export default function Signup()
{
    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create account</h1>
                    <input placeholder="fullname" type="text"/>
                    <input placeholder="email" type="email"/>
                    <input placeholder="password" type="password"/>
                    <button className="btn btn-block">Sign Up</button>

                    <p className="message">
                        Already Registered ? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
