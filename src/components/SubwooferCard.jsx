const SubwooferCard = ({ item }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-5">
      <div className="text-center h-100">

        <div className="position-relative mb-3">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid"
          />

          {item.sale && (
            <span className="badge bg-white text-dark border position-absolute top-0 end-0 m-2">
              SALE !
            </span>
          )}
        </div>

        <h6 className="fw-normal">
          {item.title}
        </h6>

        <div className="mt-2">
          {item.oldPrice && (
            <span className="text-muted text-decoration-line-through me-2">
              {item.oldPrice}
            </span>
          )}
          <span className="fw-bold">{item.price}</span>
        </div>

      </div>
    </div>
  );
};

export default SubwooferCard;
