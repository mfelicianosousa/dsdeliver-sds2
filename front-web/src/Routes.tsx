import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import NavBar from "./NavBar";

function Routes(){

    return (
        <BrowserRouter>
            <NavBar />
            <Switch> 
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/orders">
                        <Orders />
                    </Route>
            </Switch>
        </BrowserRouter>

    )


}

export default Routes ;
