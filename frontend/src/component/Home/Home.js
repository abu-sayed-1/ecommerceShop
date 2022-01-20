import { React, Fragment, useEffect } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/all";
import ProductCard from "./ProductCard";
import Helmet from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProducts } from "../../redux/actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProducts());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Helmet title="Ecommerce" />
          <div className="overlay">
            <div className="banner">
              <p>Welcome To Ecommerce</p>
              <h1>FIND AMAZING PRODUCT BELOW</h1>
              <a href="#container">
                <button>
                  Scroll <CgMouse />
                </button>
              </a>
            </div>
          </div>
          <h1 className="homeHeading">Featured Products</h1>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            <div className="seeMoreProducts">
              <Link to="/products">see more</Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
