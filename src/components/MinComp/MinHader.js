const Minhader = (props) => {
  return (
    <section className="inner_page_head">
      <div className="container_fuild">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <h3>{props.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minhader;
