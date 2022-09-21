import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { data, setData } = useState("");
  const { lodign, setLoading } = useState(true);

  useEffect(() => {
    const getData = async () => {
      // https://fakestoreapi.com/products/

      try {
        const respons = await fetch(`https://fakestoreapi.com/products/`);
        if (!respons.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${respons.status}`
          );
        }
        let acthualData = await respons.json();
        console.log(acthualData, "========");
        setData(acthualData);
      } catch (err) {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    // async function getData(){
    //     const achualData = await fetch(`https://fakestoreapi.com/products/`
    //     ).then(res = > res.json());
    //     console.log(getData)
    // }
    getData();
  }, []);

  return (
    <div className="Prodact">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6 ">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
