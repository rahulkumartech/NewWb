import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <main className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6 ">
              <div className="detail-box">
                <h1>
                  <span>Sale 20% Off</span>
                  <br />
                  On Everything
                </h1>
                <p>
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <div className="btn-box">
                  <Link to="/" className="btn1">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slider;
