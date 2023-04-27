import Pictures from "./Pictures";

const classNaming = "featureCardImage";
const imageDivClass = "featureCardImage__Container--primary";

const FeatureComp1 = () => {
  return (
    <div className="featuresCard">
      <div className="featuresCard__article">
        <span className="featuresCard__tag featuresCard__tag--primary">
          Collect
        </span>
        <h2 className="featuresCard__heading">Get feedbacks easily</h2>
        <p>
          Obtain feedback easily from your satisfied customers/clients about
          what they like best about your products/services. You can build your
          collection form in less than a minute.
        </p>
        <ul className="featuresCard__lists">
          <li>&#x2713; Less than a minute set-up</li>
          <li>&#x2713; Collect Text, pictures and videos</li>
          <li>&#x2713; Easily embed on your website</li>
        </ul>
        <a href="#" className="featuresCard__more lm--primary">
          <span>Learn More</span>
        </a>
      </div>

      <Pictures
        url="./src/assets/images/collect-1.svg"
        imageDivClass={imageDivClass}
        classNaming={classNaming}
      />
    </div>
  );
};

export default FeatureComp1;
