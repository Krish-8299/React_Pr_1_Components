const MainImage = ({ image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt="Main Section"
        className="img-fluid"
      />
    </div>
  );
};

export default MainImage;
