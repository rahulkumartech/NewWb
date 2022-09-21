import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProdactList = () => {
  const navigate = useNavigate();
  const filterData = useSelector((state) => state.fillterProduct);
  const [data, setData] = useState("");
  const [activeData, setActiveData] = useState([]);
  let discount = 25;
  const [lodign, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const respons = await fetch(`https://fakestoreapi.com/products/`);
        if (!respons.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${respons.status}`
          );
        }
        let acthualData = await respons.json();
        setData(acthualData);
        // setActiveData(acthualData);
      } catch (err) {
        setData(null);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    if (data !== "") {
      if (filterData !== "") {
        const dataNew = data.filter((val) => val.category === filterData);
        setActiveData(dataNew);
      } else {
        setActiveData(data);
      }
    }
  });

  const productHandler = (e) => {
    let iddata = e.target.getAttribute("data");
    navigate(`/productdetails/${iddata}`);
  };

  return (
    <div className="Prodact">
      <div className="container ">
        <div className="row">
          {activeData === ""
            ? "Data Loding.."
            : activeData.map((val, ind) => (
                <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={val.id}>
                  <div className="card">
                    <p className="favrat">
                      <i className="fa fa-heart favIcon"></i>
                    </p>
                    <div className="btn" data={val.id} onClick={productHandler}>
                      <img
                        className="card-img-top"
                        src={val.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">
                          {val.description.length > 40
                            ? val.description.substring(0, 40) + "..."
                            : val.description}
                        </p>
                        <p className="price">
                          <b>
                            ₹
                            {(val.price - (val.price * discount) / 100).toFixed(
                              2
                            )}
                            &nbsp; &nbsp;
                          </b>
                          <span className="atchualPrice">₹{val.price}</span>
                          <span className="offprice">
                            &nbsp; {discount} off
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProdactList;
