import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";
import ProductDetails from "./component/Product/ProductDetails/ProductDetails";
import Products from "./component/Product/Products/Products";
import Search from "./component/Product/Search/Search";
import LoginSignUp from "./component/User/LoginSignUp/LoginSignUp";
import store from "./redux/store/store";
import { loadUser } from "./redux/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder/ConfirmOrder";
import Payment from "./component/Cart/Payment/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess/OrderSuccess";
import MyOrders from "./component/Order/MyOrders/MyOrders";
import OrderDetails from "./component/Order/OrderDetails/OrderDetails";
import Dashboard from "./component/Admin/Dashboard/Dashboard";
import ProductList from "./component/Admin/Product/ProductList/ProductList";
import NewProduct from "./component/Admin/NewProduct/NewProduct";
import UpdateProduct from "./component/Admin/Product/UpdateProduct/UpdateProduct";
import OrderList from "./component/Admin/OrderList/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder/ProcessOrder";
import UsersList from "./component/Admin/Users/UsersList/UsersList";
import UpdateUser from "./component/Admin/Users/UpdateUser/UpdateUser";
import ProductReviews from "./component/Admin/Product/ProductReview/ProductReviews";
import PageNotFound from "./component/layout/PageNotFound/PageNotFound";
import DisableBrowserDevTools from "./component/DisableBrowserDevTools/DisableBrowserDevTools";

function App() {

  DisableBrowserDevTools();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/process/payment" component={Payment} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={ProductList}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={NewProduct}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product/:id"
          component={UpdateProduct}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/orders"
          component={OrderList}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={ProcessOrder}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={UsersList}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/reviews"
          component={ProductReviews}
        />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
