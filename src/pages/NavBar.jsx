import ButtonComp from "../assets/components/Button";
import scrollToWaitList from "../assets/components/goToFormFctn";
import ProjectName from "../assets/components/projectName";

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
