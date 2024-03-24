import { Navigate } from "react-router-dom";

function AuthRoute({ element }) {

  const token = localStorage.getItem("token");
  //console.log(token);
  
  if (token) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }

}

export default AuthRoute;