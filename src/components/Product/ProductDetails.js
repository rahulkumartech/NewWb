import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Newarrivals from "../MinComp/NewArrivals";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/index";

const ProductDetails = (match) => {
  const { personId } = useParams();
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${personId}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        console.log(`https://fakestoreapi.com/products/${personId}`);
      })
      .catch((error) => console.log(error));
  }, [personId]);

  const addtocarthandler = () => {
    let idData = data.id;
    dispatch(addToCart(idData));
  };

  return (
    <div className="Prodact-datils">
      <div className="container ">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/product">Product</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Product Details
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6 col-lg-4">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={data.image} />
                  </div>
                </div>
              </div>
              <div className="details col-md-6  col-lg-8">
                <h3 className="product-title">data.title</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  {/* {console.log(data.rating.count, "==")} */}
                  <span className="review-no">400 reviews</span>
                </div>
                <p className="product-description">{data.description}</p>
                <h4 className="price">
                  <span>
                    ₹{(data.price - (data.price * 25) / 100).toFixed(2)}
                  </span>{" "}
                  <span className="achualPrice">₹{data.price}</span>
                  <span className="offer">25 Off</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>

                <div className="action">
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={addtocarthandler}
                  >
                    add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newarrivals />
    </div>
  );
};

export default ProductDetails;
