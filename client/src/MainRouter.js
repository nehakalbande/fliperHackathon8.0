import { Route, Switch } from "react-router";
import MyAppBar from "./components/Appbar/Appbar";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./components/HomePage/HomePage";
import DashBoard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/footer";

const BrowserRouter = () => {
    return (
        <>
            <MyAppBar />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/dashboard' component={DashBoard} />
            </Switch>
            <Footer />
        </>
    );
};

export default BrowserRouter;
