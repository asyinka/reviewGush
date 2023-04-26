const Pictures = ({ url, classNaming, imageDivClass }) => {
  return (
    <picture className={imageDivClass}>
      <img
        className={classNaming}
        src={url}
        alt="image of a developer working on his system"
      />
    </picture>
  );
};

export default Pictures;
