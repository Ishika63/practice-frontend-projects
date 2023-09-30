import { Link, useResolvedPath, useMatch } from "react-router-dom";
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <CustomElement to={"/"} children="Home" />
            <CustomElement to={"/about"} children="About" />
            <CustomElement to={"/tasks"} children="Tasks" />
        </nav>
    );
}

function CustomElement({to,children, ...props}){
    let resolvedPath = useResolvedPath(to);
    let isActive = useMatch({path: resolvedPath.pathname});
    return (
        <div className={isActive?"navbar-select":"nav-element"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    );
}
