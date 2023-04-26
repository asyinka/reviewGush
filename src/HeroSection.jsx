const HeroSection = () => {
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
        <button className="hero__button button-primary button-primary--text">
          Start Here
        </button>
        <picture className="hero__picture--container">
          <img
            className="hero__picture"
            src="./src/assets/images/developer.svg"
            alt="image of a developer working on his system"
          />
        </picture>
      </div>
    </div>
  );
};

export default HeroSection;
