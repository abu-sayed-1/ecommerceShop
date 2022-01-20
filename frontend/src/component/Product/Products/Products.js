import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProducts } from "../../../redux/actions/productAction";
import ProductCard from "../../Home/ProductCard";
import Loader from "../../layout/Loader/Loader";
import Pagination from "react-js-pagination";
import { Slider, Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import MetaData from "../../layout/MetaData";

const categories = [
  "Laptop",
  "Phone",
  "Camera",
  "Headphone",
  "Mouse",
  "Computer",
  "Keyboard",
  "Blender machine",
  "washing machine",
  "jean pant",
  "Money Bag",
  "TV",
  "Sewing machine",
];

const Products = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);

  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    // filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const seeAllProducts = () => {
    setCategory("");
    setPrice([0, 25000]);
    setRatings(0);
    setCurrentPage(1);
    match.params.keyword = "";
  };
  // const count = filteredProductsCount;

  let keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProducts(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error, alert]);

  return (
    <Fragment>
      <Fragment>
        <MetaData title="PRODUCTS -- ECOMMERCE" />
        <h2 className="productsHeading">Products</h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        )}

        <div className="filterBox">
          <Typography>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />
          <button onClick={seeAllProducts}>SEE ALL PRODUCTS</button>
          <Typography>Categories</Typography>
          <ul className="categoryBox">
            {categories.map((category) => (
              <li
                className="category-link"
                key={category}
                onClick={() => setCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <fieldset>
            <Typography component="legend">Ratings Above</Typography>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRatings(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              min={0}
              max={5}
            />
          </fieldset>
        </div>
        {loading ? (
          ""
        ) : (
          <Fragment>
            {resultPerPage < productsCount && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </Fragment>
        )}
      </Fragment>
    </Fragment>
  );
};
export default Products;
