import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-dots loading-lg min-h-screen flex justify-center mx-auto items-center"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' />;
};

export default PrivateRoute;