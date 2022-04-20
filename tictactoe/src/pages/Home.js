import React, { useContext } from "react";
import LoggedHome from "../components/LoggedHome";
import AppContext from "../context/AppContext";
import NotLoggedHome from "../components/NotLoggedHome";

function Home(){
    const {isLogged, setIsLogged} = useContext(AppContext);
    return(
        <div>
            {isLogged? <LoggedHome/>: <NotLoggedHome/>}
        </div>
    )
}

export default Home;