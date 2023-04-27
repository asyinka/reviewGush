import ButtonComp from "./assets/Button";
import ProjectName from "./assets/projectName";

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
