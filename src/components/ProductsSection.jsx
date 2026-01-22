import Product from "./Product";
import productsData from "./productsdata";

const ProductsSection = () => {
  return (
    <section className="py-5 best">
      <div className="container">

        <h1 className="fw-bold mb-5 mt-5">
          EXPLORE BEST SELLERS
        </h1>

        <div className="row">
          {productsData.map((item, index) => (
            <Product key={index} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
