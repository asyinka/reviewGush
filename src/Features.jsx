import Pictures from "./assets/Pictures";

const url = "../src/assets/images/collect-1.svg";

const FeaturesSection = () => {
  return (
    <div className="featuresCard">
      <div className="card__article">
        <span className="card--tag">Collect</span>
        <h2>Get feedbacks easily</h2>
        <p>
          Obtain feedback easily from your satisfied customers/clients about
          what they like best about your products/services. You can build your
          collection form in less than a minute.
        </p>
        <ul className="lists">
          <li>Less than a minute set-up</li>
          <li>Collect Text, pictures and videos</li>
          <li>Easily embed on your website</li>
        </ul>
        <a href="#">
          <span className="learn-tag">Learn More</span>
        </a>
      </div>
      <Pictures url={url} />
    </div>
  );
};

export default FeaturesSection;
