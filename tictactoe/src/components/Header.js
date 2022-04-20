import React, { useContext } from "react";
import AppContext from "../context/AppContext";


function Header(){
    const {player} = useContext(AppContext);
    return(
        <h1>
            {`It is player "${player}" turn`}
        </h1>
    )
}

export default Header;