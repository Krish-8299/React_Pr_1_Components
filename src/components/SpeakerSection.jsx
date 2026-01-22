import SpeakerLeft from "./SpeakerLeft";
import SpeakerRight from "./SpeakerRight";
import speakerSectionData from "./speakersectiondata";

const SpeakerSection = () => {
  const { title, description, bannerImage, buttonText, products } =
    speakerSectionData;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          <SpeakerLeft
            bannerImage={bannerImage}
            title={title}
          />

          <SpeakerRight
            title={title}
            description={description}
            products={products}
            buttonText={buttonText}
          />

        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
