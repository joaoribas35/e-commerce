import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Display from "../pages/Display";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Display />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
