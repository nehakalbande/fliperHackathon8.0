import { Route, Switch } from "react-router";
import AppBar from "./components/Appbar/Appbar";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const BrowserRouter = () => {
    return (
        <>
            <AppBar />
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
            </Switch>
        </>
    );
};

export default BrowserRouter;
