const Pictures = ({ url }) => {
  return (
    <picture className="hero__picture--container">
      <img
        className="hero__picture"
        src={url}
        alt="image of a developer working on his system"
      />
    </picture>
  );
};

export default Pictures;
