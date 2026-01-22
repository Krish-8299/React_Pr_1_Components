import SubwooferCard from "./SubwooferCard";
import Subwooferdata from "./subwooferdata";

const SubwoofersSection = () => {
  return (
    <section className="py-5">
      <div className="container">

        <h1 className="fw-bold mb-3 textmain">
          SUBWOOFERS
        </h1>

        <p className="text fs-5 mb-5 col-lg-8 ">
          You can survive with just a regular set of speakers. You don't,
          strictly speaking, need a sub.
        </p>

        <div className="row">
          {Subwooferdata.map((item, index) => (
            <SubwooferCard key={index} item={item} />
          ))}
        </div>

        <button className="hero-btn px-4 py-2">
          SHOP SUBWOOFERS
        </button>

      </div>
    </section>
  );
};

export default SubwoofersSection;
