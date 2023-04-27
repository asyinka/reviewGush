import ButtonComp from "./Button";
import scrollToWaitList from "./goToFormFctn";
import ProjectName from "./projectName";

const NavBar = () => {
  return (
    <div className="navBar">
      <ProjectName />
      <ButtonComp
        className="navBar-Button button-primary button-primary--text"
        btnTxt="Get Started"
      />
    </div>
  );
};

export default NavBar;
