const FooterTop = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center text-center text-md-start">

        <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center gap-2">
          <span className="fw-semibold">AUDIO PRO</span>
        </div>

        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <ul className="list-unstyled d-flex justify-content-center gap-4 m-0">
            <li>Our Story</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3 fs-5">
          <i className="ri-facebook-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-vk-fill"></i>
          <i className="ri-youtube-fill"></i>
        </div>

      </div>
    </div>
  );
};

export default FooterTop;
