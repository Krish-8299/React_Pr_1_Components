const Product = ({ product }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="text-center h-100">

        <div className="position-relative">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid mb-5"
          />

          {product.sale && (
            <span className="badge bg-dark-subtle text-dark border position-absolute top-0 end-0 m-2 fs-6">
              SALE !
            </span>
          )}
        </div>

        <h6 className="fw-normal h4">{product.title}</h6>

        <div className="mt-2 mb-3 h5">
          {product.oldPrice && (
            <span className="text-muted text-decoration-line-through me-2">
              {product.oldPrice}
            </span>
          )}
          <span className="fw-bold">{product.price}</span>
        </div>

      </div>
    </div>
  );
};

export default Product;
