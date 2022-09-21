import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillterProducet } from "../../redux/Actions/index";

const Fillter = () => {
  const filterData = useSelector((state) => state.fillterProduct);

  const dispatch = useDispatch();
  const filterHendler = (e) => {
    let userData = e.target.getAttribute("name");
    dispatch(fillterProducet(userData));
  };
  useEffect(() => {
    console.log(filterData, "----");
  }, []);

  return (
    <div className="card bg-light mb-3">
      <div className="card-header bg-primary text-white text-uppercase">
        <i className="fa fa-list"></i> Categories
      </div>
      <ul className="list-group category_block">
        <li className="list-group-item" onClick={filterHendler} name="">
          All Product
        </li>
        <li
          className="list-group-item"
          onClick={filterHendler}
          name="men's clothing"
        >
          men's clothing
        </li>
        <li className="list-group-item" onClick={filterHendler} name="jewelery">
          jewelery
        </li>
        <li
          className="list-group-item"
          onClick={filterHendler}
          name="electronics"
        >
          electronics
        </li>
        <li
          className="list-group-item"
          onClick={filterHendler}
          name="women's clothing"
        >
          women's clothing
        </li>
      </ul>
    </div>
  );
};

export default Fillter;
