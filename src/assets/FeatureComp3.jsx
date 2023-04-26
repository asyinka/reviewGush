import Pictures from "./Pictures";

const FeatureComp3 = () => {
  const classNaming = "featureCardImage";
  const imageDivClass = "featureCardImage__Container--primary";

  return (
    <div className="featuresCard">
      <div className="featuresCard__article">
        <span className="featuresCard__tag featuresCard__tag--primary">
          Share
        </span>
        <h2 className="featuresCard__heading">
          Share and Display your reviews
        </h2>
        <p>
          Rather than sending WhatsApp screenshots of customers'/clients'
          reviews, share the reviews in a more organized format. With
          ReviewGush, you can share your collected reviews in a variety of
          formats, including designs.
        </p>
        <ul className="featuresCard__lists">
          <li>
            &#x2713; Easily shareable in various formats, including pictures
          </li>
          <li>
            &#x2713; Curate reviews from all your social media platforms into a
            wall of love to increase conversions
          </li>
        </ul>
        <a href="#" className="featuresCard__more lm--primary">
          <span>Learn More</span>
        </a>
      </div>

      <Pictures
        url="./src/assets/images/share-online.svg"
        imageDivClass={imageDivClass}
        classNaming={classNaming}
      />
    </div>
  );
};

export default FeatureComp3;
