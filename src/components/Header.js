import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Header = () => {
  const addCount = useSelector((state) => state.addTocartdata.cartItem);

  useEffect(() => {
    console.log(addCount, "addCount-----");
  }, [addCount]);
  return (
    <nav className="navbar navbar-expand-md navbar-light header">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://technext.github.io/famms/images/logo.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExampleDefault"
        >
          <NavListUl />

          <div className="loginLog">
            <button
              type="button"
              class="btn btn-primary addtocartbtn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>

            <Link to="/">
              <i className="fa fa-search" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <DilogPop />
      </div>
    </nav>
  );
};

export default Header;

const NavListUl = () => {
  return (
    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/product">
          Product
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

const DilogPop = () => {
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg addtocart modal-fullscreen-md-down ">
          <div class="modal-content">
            <div class="modal-body">
              <div className="card">
                <div className="row">
                  <div className="col-md-8 cart">
                    <div className="title">
                      <div className="row">
                        <div className="col">
                          <h4>
                            <b>Shopping Cart</b>
                          </h4>
                        </div>
                        <div className="col align-self-center text-right text-muted">
                          3 items
                        </div>
                      </div>
                    </div>
                    <div className="row border-top border-bottom">
                      <div className="row main align-items-center">
                        <div className="col-2">
                          <img
                            className="img-fluid"
                            src="https://i.imgur.com/1GrakTl.jpg"
                          />
                        </div>
                        <div className="col">
                          <div className="row text-muted">Shirt</div>
                          <div className="row">Cotton T-shirt</div>
                        </div>
                        <div className="col">
                          <a href="#">-</a>
                          <a href="#" className="border">
                            1
                          </a>
                          <a href="#">+</a>
                        </div>
                        <div className="col">
                          &euro; 44.00 <span className="close">&#10005;</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row main align-items-center">
                        <div className="col-2">
                          <img
                            className="img-fluid"
                            src="https://i.imgur.com/ba3tvGm.jpg"
                          />
                        </div>
                        <div className="col">
                          <div className="row text-muted">Shirt</div>
                          <div className="row">Cotton T-shirt</div>
                        </div>
                        <div className="col">
                          <a href="#">-</a>
                          <a href="#" className="border">
                            1
                          </a>
                          <a href="#">+</a>
                        </div>
                        <div className="col">
                          &euro; 44.00 <span className="close">&#10005;</span>
                        </div>
                      </div>
                    </div>
                    <div className="row border-top border-bottom">
                      <div className="row main align-items-center">
                        <div className="col-2">
                          <img
                            className="img-fluid"
                            src="https://i.imgur.com/pHQ3xT3.jpg"
                          />
                        </div>
                        <div className="col">
                          <div className="row text-muted">Shirt</div>
                          <div className="row">Cotton T-shirt</div>
                        </div>
                        <div className="col">
                          <a href="#">-</a>
                          <a href="#" className="border">
                            1
                          </a>
                          <a href="#">+</a>
                        </div>
                        <div className="col">
                          &euro; 44.00 <span className="close">&#10005;</span>
                        </div>
                      </div>
                    </div>
                    <div className="back-to-shop">
                      <Link data-bs-dismiss="modal">Back to shop</Link>
                    </div>
                  </div>
                  <div className="col-md-4 summary">
                    <div>
                      <h5>
                        <b>Summary</b>
                      </h5>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col">ITEMS 3</div>
                      <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                      <p>SHIPPING</p>
                      <select>
                        <option className="text-muted">
                          Standard-Delivery- &euro;5.00
                        </option>
                      </select>
                      <p>GIVE CODE</p>
                      <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row">
                      <div className="col">TOTAL PRICE</div>
                      <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
