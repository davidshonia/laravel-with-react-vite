import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextPrivder = ({children}) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(123)

    const setToken = (token) => {
        _setToken(token)
        token ? localStorage.setItem('ACCESS_TOKEN', token) : localStorage.removeItem('ACCESS_TOKEN')
    }


    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)
