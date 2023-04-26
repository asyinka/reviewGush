const HeroSection = () => {
  return (
    <div className="hero">
      <header className="hero__headings">
        <h1 className="header-text header-text1">Collect.</h1>
        <h1 className="header-text header-text2">Manage.</h1>
        <h1 className="header-text header-text3">Share.</h1>
      </header>
      <article className="hero__article">
        Reviews from satisfied clients/customers can now be collected easily
        with ReviewGush using video, images, text, ratings, or even a
        combination of all four formats.
      </article>
      <button className="hero__button">Start Here</button>
      <picture className="hero__picture">
        <img
          src="./assets/images/developer.svg"
          alt="image of a developer working on his system"
        />
      </picture>
    </div>
  );
};

export default HeroSection;
