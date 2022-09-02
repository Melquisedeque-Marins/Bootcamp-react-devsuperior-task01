import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {

    return (
        <BrowserRouter >
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cars">
                    <Catalog />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;