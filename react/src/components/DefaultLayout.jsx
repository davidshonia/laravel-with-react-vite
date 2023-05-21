import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import Login from "../views/Login.jsx";

export default function DefaultLayout()
{
    const {user, token} = useStateContext()

    if(!token)
    {
        return <Navigate to="/login"/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}
