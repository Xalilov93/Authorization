import { AuthContext } from "../context/auth";
import { useContext } from "react";

export const UseAuth = () => {
    const {token, setToken} = useContext(AuthContext);
    return [token, setToken]
}