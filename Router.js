import React from "react";
import { Route, BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Home from "./Home";
import Filter from "./Filter";
import Details from "./Details1";
import Header from "./Header";

function Router() {
    return(
        <BrowserRouter>
      
               <Route path="*" component={ Header} />
               <Route exact path="/" component={Home} />
               <Route path="/home" component={Home } />
               <Route path="/filter" component={Filter} />
               <Route path="/details" component={Details} />
            
        </BrowserRouter>
    )
}

export default Router;           