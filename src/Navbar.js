import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return(
        <ul className="flexNavbar" type='none'>
            <li> <Link to='/usestate' style={{textDecoration:"none"}}> useState Hook </Link>  </li>
            <li> <Link to='/useeffect' style={{textDecoration:"none"}}> useEffect Hook </Link>  </li>

        </ul>
    )
}

export default Navbar