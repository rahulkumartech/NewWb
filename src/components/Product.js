import ProdactList from "./Product/ProductList";
import Fillter from "./Product/Fillter";
import { Link } from "react-router-dom";
const Prodact = () => {
  return (
    <div className="Prodact">
      <div className="container ">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Product
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container pt-2">
        <div className="row">
          <div className="col-lg-3">
            <Fillter />
          </div>
          <div className="col-lg-9">
            <ProdactList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodact;
