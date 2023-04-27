const ButtonComp = ({ className, btnTxt }) => {
  return (
    <button type="submit" className={className}>
      {btnTxt}
    </button>
  );
};

export default ButtonComp;
