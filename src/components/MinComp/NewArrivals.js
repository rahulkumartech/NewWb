import { Link } from "react-router-dom";

const Newarrivals = () => {
  return (
    <section className="arrival_section">
      <div className="container">
        <div className="box">
          <div className="arrival_bg_box">
            <img
              src="https://technext.github.io/famms/images/arrival-bg.png"
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="heading_container remove_line_bt">
                <h2>#NewArrivals</h2>
              </div>
              <p>
                Vitae fugiat laboriosam officia perferendis provident aliquid
                voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique
                ex unde!
              </p>
              <Link to="/">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newarrivals;
