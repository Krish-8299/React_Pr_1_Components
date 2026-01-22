import AmplifierProduct from "./AmplifierProduct";

const AmplifierLeft = ({ title, description, products, buttonText }) => {
  return (
    <div className="col-lg-8">
      <h1 className="fw-bold mb-3 textmain">{title}</h1>
      <p className="text-muted mb-4">{description}</p>

      <div className="row">
        {products.map((item) => (
          <AmplifierProduct key={item.id} item={item} />
        ))}
      </div>

      <button className="hero-btn px-4 py-2 mt-3">
        {buttonText}
      </button>
    </div>
  );
};

export default AmplifierLeft;
