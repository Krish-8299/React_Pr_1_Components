const SpeakerProduct = ({ item }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4">
      <div className="text-center">

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

        <p className="small mb-1 fs-6">{item.title}</p>
        <strong>{item.price}</strong>

      </div>
    </div>
  );
};

export default SpeakerProduct;
