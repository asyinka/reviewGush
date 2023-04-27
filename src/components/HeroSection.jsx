import ButtonComp from "./Button";
import Pictures from "./Pictures";

const HeroSection = () => {
  const urlPath = "../src/assets/images/developer.svg";
  const classNaming = "hero__picture";
  const imageDivClass = "hero__picture--container";

  return (
    <div className="hero-container">
      <div className="hero">
        <header className="hero__heading">
          <h1 className="header-text--primary">Collect.</h1>
          <h1 className="header-text--secondary">Manage.</h1>
          <h1 className="header-text--primary">Share.</h1>
        </header>
        <article className="hero__article">
          Reviews from satisfied clients/customers can now be collected easily
          with ReviewGush using video, images, text, ratings, or even a
          combination of all four formats.
        </article>
        <a
          className="hero__button button-primary button-primary--text"
          href="#waitlist"
        >Start Here</a>
      </div>
      <Pictures
        url={urlPath}
        imageDivClass={imageDivClass}
        classNaming={classNaming}
      />
    </div>
  );
};

export default HeroSection;
