import { Link, Navigate } from "react-router-dom";


const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
 return <Link to="/acc/login" replace />;
 }
 return children;

};
export default Protected;