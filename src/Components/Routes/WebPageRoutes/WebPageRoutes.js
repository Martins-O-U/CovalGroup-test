import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../WebPages/Dashboard";
import Home from "../../WebPages/Home"

const WebpageRoutes = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route path="dasboard" component={Dashboard} />
    </>
);

export default WebpageRoutes