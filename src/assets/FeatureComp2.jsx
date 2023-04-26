import Pictures from "./Pictures";

const FeatureComp2 = () => {
  const classNaming = "featureCardImage";
  const imageDivClass = "featureCardImage__Container--secondary";

  return (
    <div className="featuresCard">
      <Pictures
        url="./src/assets/images/organize.svg"
        imageDivClass={imageDivClass}
        classNaming={classNaming}
      />

      <div className="featuresCard__article">
        <span className="featuresCard__tag featuresCard__tag--primary">
          Manage
        </span>
        <h2 className="featuresCard__heading">
          Manage reviews and integrations
        </h2>
        <p>
          You don't have to open an Excel sheet to gather your feedback.
          ReviewGush gives you a powerful dashboard to manage all your reviews
          across all platforms.
        </p>
        <ul className="featuresCard__lists">
          <li>
            &#x2713; You can easily import testimonials from social media and
            review sites
          </li>
          <li>
            &#x2713; You can download reviews and export them in different
            formats
          </li>
        </ul>
        <a href="#" className="featuresCard__more lm--primary">
          <span>Learn More</span>
        </a>
      </div>
    </div>
  );
};

export default FeatureComp2;
